import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

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

  constructor(private backAuth: BackandAuthService, private router: Router,
    private snack: MatSnackBar) {
    this.loginForm = new FormGroup({
      username: this.email,
      password: this.password
    });
  }

  ngOnInit() { }

  alert() {
    let message;
    let action;

    if (ebcAuth) {
      message = 'Loggin Successful';
      action = 'Okay';
    }
    if (!ebcAuth) {
      message = 'Loggin Failed';
      action = 'Try Again';
    }
    this.snack.open(message, action)
      .afterDismissed()
      .subscribe(() => {
        if (ebcAuth) {
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
    this.backAuth.getAuthToken(creds.username, creds.password)
  }

  toHome() {
    this.router.navigate(['']);
  }
}
