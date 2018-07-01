import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { BackandItemService } from '../../../core/services/backand-item.service';
import { BackandItem } from '../../../core/models/backand.model';

@Component({
  selector: 'ebc-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
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
    clients: ''
  };
  edit: boolean;
  toast: boolean;
  itemId: number;
  table: string;

  constructor(private backand: BackandItemService, private dialog: MatDialogRef<ItemDetailComponent>) { }

  ngOnInit() {

  }

  cancel() {
    this.dialog.close();
  }

  ebcNew(data: Object) {
    this.backand.addItem(this.table, data)
      .subscribe(item => {
        console.log(item);
        this.cancel();
      })
  }

  ebcUpdate(data: Object) {
    this.backand.updateItem(this.table, this.itemId, data)
      .subscribe(update => {
        console.log(update);
        this.cancel();
      });
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
