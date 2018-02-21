import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-ebc-reset',
  templateUrl: './ebc-reset.component.html',
  styleUrls: ['./ebc-reset.component.scss']
})
export class EbcResetComponent implements OnInit {
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
    }, this.areEqual);
    this.active.queryParams
      .subscribe(query => {
        this.resetToken = query['oobCode'];
      });
  }

  areEqual(g: FormGroup) {
    let equal = g.value;
    const vals = Object.keys(equal).map(key => equal[key]);
    if (vals[0] !== vals[1]) {
      return { notEqual: true };
    } else {
      return null;
    }
  }

  compReset(good) {
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
  }
}
