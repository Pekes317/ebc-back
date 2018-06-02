import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

import { BackandAuthService } from './core/services/backand-auth.service';
import { PrivatePolicyComponent } from './core/private-policy/private-policy.component';

@Component({
  selector: 'ebc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private backAuth: BackandAuthService, private dialog: MatDialog) { }

  ngOnInit() {
    this.authCheck();
  }

  authCheck() {
    this.fireAuth.idToken.subscribe(
      token => {
        let user = this.fireAuth.auth.currentUser;
        if (token) {
          this.backAuth.authUser = {
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL
          }
          this.backAuth.authed = true;
          this.backAuth.token = token;
        }  else {
          this.backAuth.authed = false;
        }
      })
  }

  showPolicy() {
    let policy: MatDialogRef<PrivatePolicyComponent> = this.dialog.open(PrivatePolicyComponent);
  }
}
