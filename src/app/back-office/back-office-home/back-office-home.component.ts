import { Component, OnInit } from '@angular/core';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandUser } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit {
  users: Array<BackandUser>;

  constructor(private backand: BackandItemService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.backand.getList('users').then(
      users => {
        this.users = users.data;
      });
  }

}
