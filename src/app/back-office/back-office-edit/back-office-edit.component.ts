import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandSvg, BackandUser } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-edit',
  templateUrl: './back-office-edit.component.html',
  styleUrls: ['./back-office-edit.component.scss']
})
export class BackOfficeEditComponent implements OnInit {
  ebcId: number;
  ebcUser: BackandUser = {
    id: NaN,
    email: '',
    firstName: '',
    lastName: '',
    pic: '',
    since: new Date(),
    subscribed: false
  };
  ebcSvg: BackandSvg = {
    id: NaN,
    path: '',
    disable: false,
    itemID: NaN
  }
  edit: boolean;
  toast: boolean = false;
  table: string;

  constructor(private backand: BackandItemService, private dialog: MdDialogRef<BackOfficeEditComponent>) { }

  ngOnInit() {

  }

  cancel() {
    this.dialog.close();
  }

  ebcNew(data: Object) {
    this.backand.addItem(this.table, data);
    this.cancel();
  }

  ebcUpdate(data: Object) {
    this.backand.updateItem(this.table, this.ebcId, data);
    this.cancel();
  }

  ebcSub() {
    let data;
    this.toast = true;

    if(this.table === 'user') {
      data = this.ebcUser;
    } else if (this.table === 'svg') {
      data = this.ebcSvg;
    }

    if (this.edit) {
      this.ebcUpdate(data);
    } else if (!this.edit) {
      delete data['id']
      this.ebcNew(data);
    }
  }
}
