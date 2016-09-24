import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandItem } from '../../shared/';

@Component({
  selector: 'app-back-office-list',
  templateUrl: './back-office-list.component.html',
  styleUrls: ['./back-office-list.component.scss']
})
export class BackOfficeListComponent implements OnInit {
  items: Array<BackandItem>;
  table: string;

  constructor(private backand: BackandItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.table = data['list'];
        this.backand.getList(data['list']).subscribe(
          list => this.items = list.data
        );
      })
  }

}
