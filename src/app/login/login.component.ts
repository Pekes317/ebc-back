import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
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

  constructor(private backAuth: BackandAuthService, private router: Router, private snack: MdSnackBar) {
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

  }

  alert() {
    let message;
    let action;

    if (this.loggedIn) {
      message = 'Loggin Successful';
      action = 'Okay';
    }
    if (!this.loggedIn) {
      message = 'Loggin Failed';
      action = 'Try Again';
    }
    this.snack.open(message, action)
      .afterDismissed()
      .subscribe(() => {
        if (this.loggedIn) {
          this.isRedirected();
        }
      });
  }

  isRedirected() {
    this.router.navigate([this.backAuth.redirectUrl]);
    this.backAuth.redirectUrl = undefined;
  }

  logIn(form) {
    let creds = form.value
    this.backandCall = this.backAuth.getAuthToken(creds.username, creds.password)
      .subscribe(
      data => {
        this.loggedIn = true;
        this.loginForm.reset();
        this.alert();
      },
      err => {
        this.loginForm.reset();
        this.alert();
      });
  }

  toHome() {
    this.router.navigate(['']);
  }
}
