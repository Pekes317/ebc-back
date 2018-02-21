import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

import { PrivatePolicyComponent } from './private-policy/private-policy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private dialog: MatDialog) { }

  ngOnInit() {
    this.authCheck();
  }

  authCheck() {
    let authUser =  { };
    this.fireAuth.idToken.subscribe(
      token => {
        let user = this.fireAuth.auth.currentUser;
        if (token) {
          console.log(token, user);
          authUser = {
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          };
          localStorage.setItem('token', token);
          localStorage.setItem('ebcUser', JSON.stringify(authUser));
          localStorage.setItem('ebcAuth', 'true');
        } else {
          localStorage.setItem('ebcAuth', 'false');
          localStorage.removeItem('token');
          localStorage.removeItem('ebcUser');
        }        
      })
  }

  showPolicy() {
    let policy: MatDialogRef<PrivatePolicyComponent> = this.dialog.open(PrivatePolicyComponent);
  }
}
