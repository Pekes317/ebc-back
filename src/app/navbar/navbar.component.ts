import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Warehouse } from 'ngx-warehouse';

import { BackandAuthService } from '../shared/backand-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private backAuth: BackandAuthService, private router: Router/*, private warehouse: Warehouse*/) { }

  ngOnInit() {
  }
  
  toHome() {
    this.router.navigate(['']);

    // this.warehouse.destroy()
    // .subscribe(
    //   data => {
    //     ebcAuth = false;
    //   },
    //   err => console.log(err));
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  toOffice() {
    this.router.navigate(['back-office']);
  }
}