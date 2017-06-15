import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef, MdSnackBar, MdSnackBarRef } from '@angular/material';
import { DRIVER_TYPE, Warehouse, WarehouseConfig } from 'ngx-warehouse';
import { Subscription } from 'rxjs';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandItem } from '../../shared/';
import { BackOfficeDetailComponent } from '../back-office-detail/back-office-detail.component';

@Component({
  selector: 'app-back-office-list',
  templateUrl: './back-office-list.component.html',
  styleUrls: ['./back-office-list.component.scss']
})
export class BackOfficeListComponent implements DoCheck, OnDestroy, OnInit {
  allChecked: boolean = false;
  ebcData: Subscription;
  isChecked: boolean = false;
  isSelected: Array<number> = [];
  items: Array<BackandItem>;
  started: boolean = false;
  table: string;

  constructor(
    private backand: BackandItemService,
    private dialog: MdDialog, private route: ActivatedRoute,
    private snack: MdSnackBar, private warehouse: Warehouse) { }

  ngDoCheck() {
    this.checked();
  }

  ngOnDestroy() {
    this.ebcData.unsubscribe();
  }

  ngOnInit() {
    let data = this.route.data.subscribe(
      ebcData => {
        this.table = ebcData['list'];
        this.getItems();
        this.backand.itemListener();
        this.backand.setList(this.table);
      });
    data.unsubscribe();
  }

  addItem() {
    this.detailModal(false);
  }

  checked() {
    if (this.isSelected.length !== 0) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
    if (this.started) {
      if (this.isSelected.length === this.items.length) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }
    }
  }

  completeModal(ebcItem: MdDialogRef<BackOfficeDetailComponent>, edit) {
    let modal = ebcItem.componentInstance;
    ebcItem.afterClosed().subscribe(
      () => {
        if (modal.toast) {
          let message = this.snack.open(`Item has been ${this.setMessage(edit)}`, 'Okay');
          this.getItems();
          this.toastDismiss(message);
        }
      });
  }

  delete() {
    this.backand.deleteItem(this.table, this.isSelected)
      .then(res => {
        this.isSelected = [];
        let message = this.snack.open('Item(s) have been Deleted', 'Okay');
        this.toastDismiss(message);
      });
  }

  detailModal(edit, item?) {
    let ebcItem: MdDialogRef<BackOfficeDetailComponent> = this.dialog.open(BackOfficeDetailComponent);
    ebcItem.componentInstance.table = this.table;
    ebcItem.componentInstance.edit = edit;
    if (edit) {
      ebcItem.componentInstance.ebcPiece = item;
      ebcItem.componentInstance.itemId = item['id'];
    };
    this.completeModal(ebcItem, edit);
  }

  editItem(item) {
    this.detailModal(true, item);
  }

  getItems() {
    this.ebcData = this.warehouse.get(this.table)
      .subscribe(data => {
        if (data === null) {
          this.httpCall();
        } else {
          this.items = data;
        }
      },
      err => {
        console.log('error', err);
      });
  }

  httpCall() {
    this.backand.getList(this.table).then(
      list => {
        this.storeItems(list.data);
        this.items = list.data;
        this.started = true;
        sessionStorage.setItem('updateList', 'false');
      });
  }

  selected(item) {
    let index = this.isSelected.indexOf(item);
    if (index !== -1) {
      this.isSelected.splice(index, 1);
    } else {
      this.isSelected.push(item);
    }
  }

  setMessage(edit) {
    let text;
    if (edit) {
      text = 'Updated';
    } else {
      text = 'Created';
    }
    return text;
  }

  storeItems(items) {
    this.warehouse.set(this.table, items);
  }

  toastDismiss(message: MdSnackBarRef<any>) {
    setTimeout(() => {
      message.dismiss();
    }, 3000);
    message.afterDismissed().subscribe(
      () => this.getItems()
    );
  }
}
