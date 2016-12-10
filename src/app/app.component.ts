import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackandAuthService } from './shared/backand-auth.service';
import { BackandConfigService } from './shared/backand-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private backConfig: BackandConfigService) {

  }

  ngOnInit() {
    this.backConfig.authCheck();
  }
}
