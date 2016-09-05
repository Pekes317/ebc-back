import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BackandAuthService } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', Validators.required);
  loginForm: FormGroup;
  password: FormControl = new FormControl('', Validators.required);

  constructor(private backAuth: BackandAuthService) {
    this.loginForm = new FormGroup({
      username: this.email,
      password: this.password
    })
  }

  ngOnInit() {
  }

  logIn(form) {
    let creds = form.value
    this.backAuth.getAuthToken(creds.username, creds.password)
      .subscribe(
        data => form.reset('')
      );
  }
}
