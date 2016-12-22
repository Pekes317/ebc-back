import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { BackandAuthService } from './shared/backand-auth.service';
import { BackandConfigService } from './shared/backand-config.service';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private backConfig: BackandConfigService, private dialog: MdDialog) {

  }

  ngOnInit() {
    this.backConfig.authCheck();
  }

  showPolicy() {
    let policy: MdDialogRef<PrivatePolicyComponent> = this.dialog.open(PrivatePolicyComponent);
  }
}
