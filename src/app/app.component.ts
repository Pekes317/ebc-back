import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackandAuthService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private backAuth: BackandAuthService, private router: Router) {

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
