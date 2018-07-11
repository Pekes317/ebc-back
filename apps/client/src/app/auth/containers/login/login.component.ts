import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { EmailValidator } from '../../../core/validators/email.validator';
import { Login } from '../../../state/auth-store/actions/auth.actions';
import * as formAuth from '../../../state/auth-store/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.required, EmailValidator.validate]);
  loginForm: FormGroup;
  password: FormControl = new FormControl('', Validators.required);

  constructor(private router: Router, private store: Store<formAuth.State>) {
    this.loginForm = new FormGroup({
      username: this.email,
      password: this.password
    });
  }

  ngOnInit() { }

  logIn(form) {
    let creds = form.value
    this.store.dispatch(new Login(creds));
    this.loginForm.reset();
  }

  toHome() {
    this.router.navigate(['']);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('invalidEmail') ? 'Not a valid email' : '';
  }
}
