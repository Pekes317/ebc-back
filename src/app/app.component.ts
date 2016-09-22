import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackandAuthService } from './shared/backand-auth.service';
import { BackandConfigService } from './shared/backand-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private backAuth: BackandAuthService, private backConfig: BackandConfigService, private router: Router) {

  }

  ngOnInit() {
    this.backConfig.authCheck();
  }

  toHome() {
    this.backAuth.clearAuthToken();
    this.router.navigate(['']);
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  toOffice() {
    this.router.navigate(['back-office']);
  }
}
