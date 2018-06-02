import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth  } from 'angularfire2/auth';

import { BackandAuthService } from '../../core/services/backand-auth.service';

@Component({
  selector: 'ebc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck, OnInit {
  auth: boolean = this.backAuth.authed;

  constructor(private backAuth: BackandAuthService, private fireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  ngDoCheck() {
    this.auth = this.backAuth.authed;
  }

  toHome() {
    this.fireAuth.auth.signOut()
      .then(() => this.router.navigate(['']))
      .catch(err => console.log(err));
  }

  toMain() {
    let path:string = this.auth ? 'back-office' : 'login';
    this.router.navigate([path]);
  }

  toCreate() {
    this.router.navigate(['signup']);
  }
}