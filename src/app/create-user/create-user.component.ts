import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BackandAuthService } from '../shared/backand-auth.service';
import { EmailValidator } from '../shared';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createForm: FormGroup;
  displayName: FormControl = new FormControl('');
  email: FormControl = new FormControl('', [Validators.required, EmailValidator.validate]);
  password: FormControl = new FormControl('');
  photoUrl: FormControl = new FormControl('');

  constructor(private auth: BackandAuthService, private router: Router) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      photoUrl: this.photoUrl
    });
  }

  createUser(form: AbstractControl) {
    this.auth.signUp(form.value);
    this.createForm.reset();
  }

  toHome() {
    this.router.navigate(['']);
  }
}
