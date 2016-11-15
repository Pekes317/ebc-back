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
import { BackandSvg } from '../../shared/';
import { BackOfficeEditComponent } from '../back-office-edit/back-office-edit.component';

@Component({
  selector: 'app-back-office-svg',
  templateUrl: './back-office-svg.component.html',
  styleUrls: ['./back-office-svg.component.scss']
})
export class BackOfficeSvgComponent implements  DoCheck, OnDestroy, OnInit {
  allChecked: boolean = false;
  backandCall: Subscription;
  isChecked: boolean = false;
  isSelected: Array<number> = [];
  svgs: Array<BackandSvg>;
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
          let message = this.snack.open(`SVG has been ${this.setMessage(edit)}`, 'Okay', config);
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
      if (this.isSelected.length === this.svgs.length) {
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
      let message = this.snack.open('SVG(s) have been Deleted', 'Okay', config);
      this.toastDismiss(message);
    });
  }

  detailModal(edit, svg?) {
    let ebcSvg: MdDialogRef<BackOfficeEditComponent> = this.dialog.open(BackOfficeEditComponent);
    ebcSvg.componentInstance.table = this.table;
    ebcSvg.componentInstance.edit = edit;
    if (edit) {
      ebcSvg.componentInstance.ebcSvg = svg;
      ebcSvg.componentInstance.ebcId = svg['id'];
    };
    this.completeModal(ebcSvg, edit);
  }

  editItem(svg) {
    this.detailModal(true, svg);
  }

  getItems() {
    this.backandCall = this.backand.getList(this.table).subscribe(
      list => {
        this.svgs = list.data;
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
