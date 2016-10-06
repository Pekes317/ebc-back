import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandItem } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-detail',
  templateUrl: './back-office-detail.component.html',
  styleUrls: ['./back-office-detail.component.scss']
})
export class BackOfficeDetailComponent implements OnInit {
  itemId: number;
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
  table: string;

  constructor(private backand: BackandItemService, private dialog: MdDialogRef<any>) { }

  ngOnInit() {
    if (this.edit) {
      this.backand.getItem(this.table, this.itemId).subscribe(
        data => this.ebcPiece = data
      );
    }
  }

  cancel() {
    this.dialog.close();
  }

  ebcNew(data) {
    console.log(data);
  }

  ebcUpdate(data) {
    console.log(data);
  }

  ebcSub() {
    let data = this.ebcPiece;
    
    delete data['id']
    if (this.edit) {
      this.ebcUpdate(data);
    } else {
      this.ebcNew(data);
    }
  }
}
