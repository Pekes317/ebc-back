import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackandAuthService } from '../shared/backand-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private backAuth: BackandAuthService, private router: Router) { }

  ngOnInit() {
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
