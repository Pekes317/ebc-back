import { Component, DoCheck, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogConfig } from '@angular/material';

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
  isChecked: boolean = false;
  items: Array<BackandItem>;
  isSelected: Array<number> = [];
  started: boolean = false;
  table: string;

  constructor(
    public view: ViewContainerRef,
    private backand: BackandItemService,
    private dialog: MdDialog,
    private route: ActivatedRoute) { }

  ngDoCheck() {
    this.checked();
  }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.table = data['list'];
        this.backand.getList(this.table).subscribe(
          list => {
            this.items = list.data;
            this.started = true;
          });
      });
  }

  addItem() {
    let config: MdDialogConfig = new MdDialogConfig();
    config.viewContainerRef = this.view;
    let ebcNew = this.dialog.open(BackOfficeDetailComponent, config);
    ebcNew.componentInstance.table = this.table;
    ebcNew.componentInstance.edit = false;
    ebcNew.afterClosed().subscribe(
      data => this.ngOnInit()
    )
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
    this.isSelected.forEach(data => {
      let index = this.isSelected.indexOf(data);
      this.isSelected.splice(index, 1);
      this.backand.deleteItem(this.table, data);
    });
    this.ngOnInit();
  }

  editItem(item) {
    let config: MdDialogConfig = new MdDialogConfig();
    config.viewContainerRef = this.view;
    let ebcNew = this.dialog.open(BackOfficeDetailComponent, config);
    ebcNew.componentInstance.table = this.table;
    ebcNew.componentInstance.ebcPiece = item;
    ebcNew.componentInstance.edit = true;
    ebcNew.componentInstance.itemId = item['id'];
    ebcNew.afterClosed().subscribe(
      data => this.ngOnInit()
    )
  }

  selectAll() {
    /*this.items.forEach(data => {
      this.selected(data['id']);
      console.log(this.isSelected);
    });
    console.log(this.isSelected);*/
  }

  selected(item) {
    let index = this.isSelected.indexOf(item);
    if (index !== -1) {
      this.isSelected.splice(index, 1);
    } else {
      this.isSelected.push(item);
    }
  }
}
