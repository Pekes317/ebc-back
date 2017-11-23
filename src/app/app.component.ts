import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BackandService } from '@backand/angular2-sdk';
import { Warehouse } from 'ngx-warehouse';

import { PrivatePolicyComponent } from './private-policy/private-policy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private backand: BackandService, private dialog: MatDialog, private warehouse: Warehouse) {

  }

  ngOnInit() {
    this.backand.init({
      appName: 'ebc2',
      anonymousToken: '6755ec7e-3a7e-4dc7-a414-fd1acf8a51a1',
      manageRefreshToken: true,
      runSocket: true,
      signUpToken: 'dbaea0da-730d-4039-8f8a-77a507a3e908',
      storagePrefix: 'ebc-',
      useAnonymousTokenByDefault: false
    });
    this.authCheck();
  }

  authCheck() {
    this.warehouse.get('auth')
      .subscribe(auth => ebcAuth = auth);
    this.warehouse.get('userRole')
      .subscribe(role => ebcRole = role);
    this.dbUpdate();
  }

  dbUpdate() {
    let ebcArr: Array<string> = ['items', 'users', 'samples', 'templates'];
    let needUpdate = sessionStorage.getItem('updateList');
    if (needUpdate === null || needUpdate === 'true') {
      ebcArr.forEach(str => {
        this.backand.object.getList(str)
          .then(list => {
            this.warehouse.set(str, list.data);
            sessionStorage.setItem('updateList', 'false');
          })
          .catch(err => console.log(err));
      });
    }
  }

  showPolicy() {
    let policy: MatDialogRef<PrivatePolicyComponent> = this.dialog.open(PrivatePolicyComponent);
  }
}
