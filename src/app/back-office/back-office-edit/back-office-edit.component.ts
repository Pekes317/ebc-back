import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandUser } from '../../shared/backand-types';

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

  edit: boolean;
  toast: boolean;
  table: string;

  constructor(private backand: BackandItemService, private dialog: MdDialogRef<BackOfficeEditComponent>) { }

  ngOnInit() { }

  cancel() {
    this.dialog.close();
  }

  ebcNew(data: Object) {
    this.backand.addItem(this.table, data)
      .then(() => this.cancel());
  }

  ebcUpdate(data: Object) {
    this.backand.updateItem(this.table, this.ebcId, data)
      .then(() => this.cancel());
  }

  ebcSub() {
    let data = this.ebcUser;
    this.toast = true;

    if (this.edit) {
      this.ebcUpdate(data);
    } else if (!this.edit) {
      delete data['id']
      this.ebcNew(data);
    }
  }
}
