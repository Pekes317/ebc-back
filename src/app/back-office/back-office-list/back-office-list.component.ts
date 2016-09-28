import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandItem } from '../../shared/';

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

  constructor(private backand: BackandItemService, private route: ActivatedRoute) { }

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

  selectAll() {
    /*this.items.forEach(data => {
      this.selected(data['id']);
      console.log(this.isSelected);
    })*/
    console.log(this.isSelected);
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
