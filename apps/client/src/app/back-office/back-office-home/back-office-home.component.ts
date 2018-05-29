import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandUser } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit, OnDestroy {
  ebcData: Subscription;
  users: Array<BackandUser>;

  constructor(private backand: BackandItemService) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    //this.ebcData.unsubscribe();
  }

  backCall() {
    this.backand.getList('users')
  }

  getUsers() {

  }
}
