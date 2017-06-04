import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackandService } from '@backand/angular2-sdk';

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


  constructor(private backand: BackandService, private router: Router) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      newPassword: this.newPassword,
      passwordConfirm: this.passwordConfirm
    }, this.areEqual);
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

  toHome() {
    this.router.navigate(['']);
  }

  submitReset() {
    
  }
}
