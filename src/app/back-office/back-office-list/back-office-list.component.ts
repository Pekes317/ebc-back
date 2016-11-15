import { Component, DoCheck, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  MdDialog,
  MdDialogRef,
  MdSnackBar,
  MdSnackBarConfig,
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
export class BackOfficeListComponent implements DoCheck, OnDestroy, OnInit {
  allChecked: boolean = false;
  backandCall: Subscription;
  isChecked: boolean = false;
  isSelected: Array<number> = [];
  items: Array<BackandItem>;
  started: boolean = false;
  table: string;

  constructor(
    public view: ViewContainerRef,
    private backand: BackandItemService,
    private dialog: MdDialog,
    private route: ActivatedRoute,
    private snack: MdSnackBar) { }

  ngDoCheck() {
    this.checked();
  }

  ngOnDestroy() {
    this.backandCall.unsubscribe();
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
    ebcItem.afterClosed().subscribe(
      () => {
        let toast = ebcItem.componentInstance.toast;
        let config = new MdSnackBarConfig();
        config.viewContainerRef = this.view;
        if (toast) {
          let message = this.snack.open(`Item has been ${this.setMessage(edit)}`, 'Okay', config);
          this.getItems();
          this.toastDismiss(message);
        };
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
    let config = new MdSnackBarConfig();
    config.viewContainerRef = this.view;
    this.isSelected.forEach(data => {
      let index = this.isSelected.indexOf(data);
      this.isSelected.splice(index, 1);
      this.backand.deleteItem(this.table, data);
      let message = this.snack.open('Item(s) have been Deleted', 'Okay', config);
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
    this.backandCall = this.backand.getList(this.table).subscribe(
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
