import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ItemDialogModel } from './item-data.type';

@Component({
  selector: 'ebc-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  ebcItem: FormGroup = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    desc: new FormControl(''),
    media: new FormControl(''),
    pic: new FormControl(''),
    data: new FormControl(''),
    flyer: new FormControl(false),
    ready: new FormControl(false),
    disable: new FormControl(false)
  });

  edit: boolean;
  extra: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemDialogModel, private dialog: MatDialogRef<ItemDetailComponent>) { }

  ngOnInit() {
    this.edit = this.data.edit ? this.data.edit : false;
    this.extra = (this.data.type === 'items') ? true : false;
    if (this.data.ebcItem) {
      this.ebcItem.setValue({
        id: this.data.ebcItem.id,
        name: this.data.ebcItem.name,
        desc: this.data.ebcItem.desc,
        media: this.data.ebcItem.media,
        pic: this.data.ebcItem.pic,
        data: this.data.ebcItem['data'] ? this.data.ebcItem['data'] : '',
        flyer: this.data.ebcItem.flyer,
        ready: this.data.ebcItem.ready,
        disable: this.data.ebcItem.disable
      });
    }
  }

  cancel() {
    this.dialog.close({ toast: false });
  }

  submit() {
    this.dialog.close({
      data: this.createData(),
      toast: true
    });
  }

  createData() {
    let item = this.ebcItem.value
    if (this.data.ebcItem) {
      item.id = this.data.ebcItem.id;
    }
    if (!this.extra) {
      delete item.data;
    }
    return item;
  }
}
