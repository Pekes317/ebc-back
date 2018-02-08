import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';

import { EmailValidator } from '../shared';
import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.required, EmailValidator.validate]);
  loginForm: FormGroup;
  password: FormControl = new FormControl('', Validators.required);

  constructor(private firebase: AngularFireAuth, private router: Router, private snack: MatSnackBar) {
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

      });
  }

  logIn(form) {
    let creds = form.value
    this.firebase.auth.signInAndRetrieveDataWithEmailAndPassword(creds.username, creds.password)
      .then(userRecord => {
        this.firebase.idToken.subscribe(token => console.log(token))
      })
      .catch(err => console.log(err))
  }

  toHome() {
    this.router.navigate(['']);
  }
}
