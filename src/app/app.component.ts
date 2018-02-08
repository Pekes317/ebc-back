import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import {  } from 'angularfire2';

import { PrivatePolicyComponent } from './private-policy/private-policy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.authCheck();
  }

  authCheck() {
    this.dbUpdate();
  }

  dbUpdate() {
    let ebcArr: Array<string> = ['items', 'users', 'samples', 'templates'];
    let needUpdate = sessionStorage.getItem('updateList');
    if (needUpdate === null || needUpdate === 'true') {
      ebcArr.forEach(str => {
      
      });
    }
  }

  showPolicy() {
    let policy: MatDialogRef<PrivatePolicyComponent> = this.dialog.open(PrivatePolicyComponent);
  }
}
