import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Warehouse } from 'ngx-warehouse';
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

  constructor(private backand: BackandItemService /*, private warehouse: Warehouse*/) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    this.ebcData.unsubscribe();
  }

  backCall() {
    this.backand.getList('users')
  }

  getUsers() {
    // this.ebcData = this.warehouse.get('users').subscribe(
    //   ebcUsers => {
    //     if (ebcUsers === null) {
    //       this.backCall();
    //     } else {
    //       this.users = ebcUsers;
    //     }
    //   });
  }
}
