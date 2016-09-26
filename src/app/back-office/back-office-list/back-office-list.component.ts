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
  isChecked: boolean = false;
  items: Array<BackandItem>;
  isSelected: Array<number> = [];
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
          list => this.items = list.data
        );
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
  }

  delete() {
    this.isSelected.forEach(data => {
      let index = this.isSelected.indexOf(data);
      this.isSelected.splice(index, 1);
      this.backand.deleteItem(this.table, data);
    });
    this.ngOnInit();
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
