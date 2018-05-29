import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';

import { EmailValidator } from '../shared/custom-validators';

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

  alert(ebcAuth) {
    let message;
    let action;

    if (ebcAuth) {
      message = 'Login Successful';
      action = 'Okay';
    }
    if (!ebcAuth) {
      message = 'Login Failed';
      action = 'Try Again';
    }
    this.snack.open(message, action, {
      duration: 5000
    })
      .afterDismissed()
      .subscribe(() => {
        if (ebcAuth) {
          this.router.navigate(['back-office']);
        }
      });
  }

  logIn(form) {
    let creds = form.value
    this.firebase.auth.signInWithEmailAndPassword(creds.username, creds.password)
      .then(userRecord => {        
        this.alert(true);
      })
      .catch(err => {
        this.alert(false);
        console.log(err);
      });
    this.loginForm.reset();
  }

  toHome() {
    this.router.navigate(['']);
  }
}
