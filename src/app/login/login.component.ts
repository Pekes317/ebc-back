import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackandAuthService } from '../shared/backand-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', Validators.required);
  loginForm: FormGroup;
  password: FormControl = new FormControl('', Validators.required);
  redirect: boolean = false;

  constructor(private backAuth: BackandAuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: this.email,
      password: this.password
    })
  }

  ngOnInit() {
    if (this.backAuth.redirectUrl !== undefined) {
      this.redirect = true;
    }
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


  isRedirected() {
    this.router.navigate([this.backAuth.redirectUrl]);
    this.backAuth.redirectUrl = undefined;
  }
}
