import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

import { BackandAuthService } from '../../services/backand-auth.service';
import { PrivatePolicyComponent } from '../../components/private-policy/private-policy.component';

@Component({
  selector: 'ebc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  copyright: number = 2016;

  constructor(private fireAuth: AngularFireAuth, private backAuth: BackandAuthService, private dialog: MatDialog) { }

  ngOnInit() {
    let date = new Date();
    this.authCheck();
    this.copyright = date.getFullYear();
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
    this.dialog.open(PrivatePolicyComponent);
  }
}
