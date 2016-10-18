import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BackandAuthService } from '../shared/backand-auth.service';
import { EmailValidator } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {
  backandCall: Subscription;
  email: FormControl = new FormControl('', [Validators.required, EmailValidator.validate]);
  loginForm: FormGroup;
  loggedIn: boolean = false;
  password: FormControl = new FormControl('', Validators.required);
  redirect: boolean = false;

  constructor(private backAuth: BackandAuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: this.email,
      password: this.password
    });
  }

  ngOnDestroy() {
    if (this.loggedIn) {
      this.backandCall.unsubscribe();
    }
  }

  ngOnInit() {
    if (this.backAuth.redirectUrl !== undefined) {
      this.redirect = true;
    }
  }

  isRedirected() {
    this.router.navigate([this.backAuth.redirectUrl.substring(1)]);
    this.backAuth.redirectUrl = undefined;
  }

  logIn(form) {
    let creds = form.value
    this.loggedIn = true;
    this.backandCall = this.backAuth.getAuthToken(creds.username, creds.password)
      .subscribe(
      data => {
        this.loginForm.reset();
        if (this.redirect) {
          this.isRedirected();
        }
      },
      err => this.loginForm.reset());
  }

  toHome() {
    this.router.navigate(['']);
  }
}
