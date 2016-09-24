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
    this.route.params.subscribe(
      data => {
        this.table = data['list'];
        this.backand.getList(data['list']).subscribe(
          list => this.items = list.data
        );
      })
  }

  checked() {
    if (this.isSelected.length !== 0 ) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  selected(item) {
    this.isSelected.push(item);
    console.log(this.isSelected);
  }
}
