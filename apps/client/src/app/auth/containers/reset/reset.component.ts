import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

import { EmailValidator } from '../../../core/validators/email.validator';
import { AreEqualValidator } from '../../../core/validators/are-equal.validator';

@Component({
  selector: 'ebc-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  newPassword: FormControl = new FormControl('', Validators.minLength(6));
  passwordConfirm: FormControl = new FormControl('', Validators.minLength(6));
  resetForm: FormGroup;
  resetToken: string;

  constructor(private active: ActivatedRoute, private fireAuth: AngularFireAuth,
    private toast: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      newPassword: this.newPassword,
      passwordConfirm: this.passwordConfirm
    }, AreEqualValidator.validate);
    this.active.queryParams
      .subscribe(query => {
        this.resetToken = query['oobCode'];
      });
  }

  compReset(good) {
    this.resetForm.reset();
    let resetMess = this.toast.open(`Your Password has ${good ? 'been reset' : 'reset has fail'}`, good ? 'Okay' : 'Try Again');
    setTimeout(() => {
      resetMess.dismiss();
    }, 3000);
  }

  toHome() {
    this.router.navigate(['']);
  }

  submitReset(form: AbstractControl) {
    let reset = form.get('newPassword').value;
    this.fireAuth.auth.verifyPasswordResetCode(this.resetToken)
      .then(() => this.fireAuth.auth.confirmPasswordReset(this.resetToken, reset)
        .then(res => this.compReset(true))
        .catch(err => this.resetError(err)))
      .catch(err => this.resetError(err))
  }

  private resetError(error) {
    console.log(error);
    this.compReset(false);
    this.resetForm.reset();
  }
}
