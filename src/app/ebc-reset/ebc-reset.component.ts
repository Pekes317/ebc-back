import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

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

  constructor(private active: ActivatedRoute,
    private toast: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      newPassword: this.newPassword,
      passwordConfirm: this.passwordConfirm
    }, this.areEqual);
    this.active.queryParams
      .subscribe(query => {
        this.resetToken = query['token'];
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

  submitReset(form) {
    let reset = form.value;
  }
}
