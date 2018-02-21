import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandUser } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-edit',
  templateUrl: './back-office-edit.component.html',
  styleUrls: ['./back-office-edit.component.scss']
})
export class BackOfficeEditComponent implements OnInit {
  ebcId: number;
  ebcUser = {
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

  constructor(private backand: BackandItemService, private dialog: MatDialogRef<BackOfficeEditComponent>) { }

  ngOnInit() { }

  cancel() {
    this.dialog.close();
  }

  ebcNew(data: Object) {
    this.backand.addItem(this.table, data)
  }

  ebcUpdate(data: Object) {
    this.backand.updateItem(this.table, this.ebcId, data)
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
