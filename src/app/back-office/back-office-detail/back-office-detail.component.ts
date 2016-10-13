import { Component, OnInit} from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandItem } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-detail',
  templateUrl: './back-office-detail.component.html',
  styleUrls: ['./back-office-detail.component.scss']
})
export class BackOfficeDetailComponent implements OnInit {
  ebcPiece: BackandItem = {
    id: NaN,
    name: '',
    desc: '',
    media: '',
    pic: '',
    data: '',
    flyer: false,
    ready: false,
    disable: false,
    user: '',
    item: ''
  };
  edit: boolean;
  toast: boolean = false;
  itemId: number;
  table: string;

  constructor(private backand: BackandItemService, private dialog: MdDialogRef<any>) { }

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
    this.backand.updateItem(this.table, this.itemId, data);
    this.cancel();
  }

  ebcSub() {
    let data = this.ebcPiece;
    this.toast = true;

    if (this.edit) {
      this.ebcUpdate(data);
    } else if (!this.edit) {
      delete data['id']
      this.ebcNew(data);
    }
  }
}
