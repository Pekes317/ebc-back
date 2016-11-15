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
import { BackandUser } from '../../shared/';
import { BackOfficeEditComponent } from '../back-office-edit/back-office-edit.component';

@Component({
  selector: 'app-back-office-users',
  templateUrl: './back-office-users.component.html',
  styleUrls: ['./back-office-users.component.scss']
})
export class BackOfficeUsersComponent implements DoCheck, OnDestroy, OnInit {
  allChecked: boolean = false;
  backandCall: Subscription;
  isChecked: boolean = false;
  isSelected: Array<number> = [];
  users: Array<BackandUser>;
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

  completeModal(ebcItem: MdDialogRef<BackOfficeEditComponent>, edit) {
    ebcItem.afterClosed().subscribe(
      () => {
        let toast = ebcItem.componentInstance.toast;
        let config = new MdSnackBarConfig();
        config.viewContainerRef = this.view;
        if (toast) {
          let message = this.snack.open(`User has been ${this.setMessage(edit)}`, 'Okay', config);
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
      if (this.isSelected.length === this.users.length) {
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
      let message = this.snack.open('User(s) have been Deleted', 'Okay', config);
      this.toastDismiss(message);
    });
  }

  detailModal(edit, user?) {
    let ebcUser: MdDialogRef<BackOfficeEditComponent> = this.dialog.open(BackOfficeEditComponent);
    ebcUser.componentInstance.table = this.table;
    ebcUser.componentInstance.edit = edit;
    if (edit) {
      ebcUser.componentInstance.ebcUser = user;
      ebcUser.componentInstance.ebcId = user['id'];
    };
    this.completeModal(ebcUser, edit);
  }

  editItem(user) {
    this.detailModal(true, user);
  }

  getItems() {
    this.backandCall = this.backand.getList(this.table).subscribe(
      list => {
        this.users = list.data;
        this.started = true;
      });
  }

  selected(user) {
    let index = this.isSelected.indexOf(user);
    if (index !== -1) {
      this.isSelected.splice(index, 1);
    } else {
      this.isSelected.push(user);
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
