import { Component, DoCheck, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  MdDialog,
  MdDialogRef,
  MdSnackBar,
  MdSnackBarRef
} from '@angular/material';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandItem } from '../../shared/';
import { BackOfficeDetailComponent } from '../back-office-detail/back-office-detail.component';

@Component({
  selector: 'app-back-office-list',
  templateUrl: './back-office-list.component.html',
  styleUrls: ['./back-office-list.component.scss']
})
export class BackOfficeListComponent implements DoCheck, OnInit {
  allChecked: boolean = false;
  backandCall: Subscription;
  isChecked: boolean = false;
  isSelected: Array<number> = [];
  items: Array<BackandItem>;
  started: boolean = false;
  table: string;

  constructor(
    private backand: BackandItemService,
    private dialog: MdDialog,
    private route: ActivatedRoute,
    private snack: MdSnackBar) { }

  ngDoCheck() {
    this.checked();
  }

  ngOnInit() {
    let data = this.route.data.subscribe(
      data => {
        this.table = data['list'];
        this.getItems();
      });
    data.unsubscribe();
  }

  addItem() {
    this.detailModal(false);
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
    this.backandCall = this.backand.getList(this.table).then(
      list => {
        this.items = list.data;
        this.started = true;
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

  toastDismiss(message: MdSnackBarRef<any>) {
    setTimeout(() => {
      message.dismiss();
    }, 3000);
    message.afterDismissed().subscribe(
      () => this.getItems()
    );
  }
}
