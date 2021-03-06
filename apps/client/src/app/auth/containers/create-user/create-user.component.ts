import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { EmailValidator } from '../../../core/validators/email.validator';
import { AreEqualValidator } from '../../../core/validators/are-equal.validator';

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
  passwordConfirm: FormControl = new FormControl('');
  photoUrl: FormControl = new FormControl('');
  verifyPass: FormGroup;

  constructor(private auth: AuthService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit() {
    this.verifyPass = new FormGroup({
      password: this.password,
      passwordConfirm: this.passwordConfirm
    }, AreEqualValidator.validate);
    this.createForm = new FormGroup({
      displayName: this.displayName,
      email: this.email,
      photoUrl: this.photoUrl,
      verify: this.verifyPass
    });
  }

  alert(message, action) {
    this.snack.open(message, action, {
      duration: 5000
    });
  }

  createUser(form: AbstractControl) {
    let user = form.value;
    user.password = form.value.verify.password;
    delete user.verify;
    this.auth.signUp(user)
      .subscribe(res => this.alert('Congrats, Your acount has been Created!', 'Okay'),
        err => this.alert(err.error.message, 'Try Again'));
    this.createForm.reset();
  }

  toHome() {
    this.router.navigate(['']);
  }
}
