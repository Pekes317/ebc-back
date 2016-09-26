import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BackandAuthService } from '../shared/backand-auth.service';
import { EmailValidator } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.required, EmailValidator.validate]);
  loginForm: FormGroup;
  password: FormControl = new FormControl('', Validators.required);
  redirect: boolean = false;

  constructor(private backAuth: BackandAuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: this.email,
      password: this.password
    });
  }

  ngOnInit() {
    if (this.backAuth.redirectUrl !== undefined) {
      this.redirect = true;
      console.log(this.backAuth.redirectUrl);
    }
  }

  isRedirected() {
    this.router.navigate([this.backAuth.redirectUrl]);
    this.backAuth.redirectUrl = undefined;
  }

  logIn(form) {
    let creds = form.value
    this.backAuth.getAuthToken(creds.username, creds.password)
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
