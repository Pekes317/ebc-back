import { Component, OnInit } from '@angular/core';

import { BackandAuthService } from '../shared/backand-auth.service';
import { BackandUser } from '../shared/backand-types';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {
  backUser: BackandUser;

  constructor(private backAuth: BackandAuthService) { }

  ngOnInit() {
    this.backUser = this.backAuth.authUser;
  }
}
