import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

import { BackandAuthService } from './shared/backand-auth.service';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';

@Component({
  selector: 'app-root',
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
          console.log(token, user);
          this.backAuth.authUser = {
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL
          }
          this.backAuth.authed = true;
        }  else {
          this.backAuth.authed = false;
        }
      })
  }

  showPolicy() {
    let policy: MatDialogRef<PrivatePolicyComponent> = this.dialog.open(PrivatePolicyComponent);
  }
}
