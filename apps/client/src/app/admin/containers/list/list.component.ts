import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';

import { adminNav } from '../../admin-nav';
import { LoadAdminObjs } from '../../../state/item-store/actions/admin-data.actions';
import { SelectorService } from '../../../core/services/selector.service';
import * as fromAdmin from '../../../state/item-store/reducers';

@Component({
  selector: 'ebc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listData$;
  nav = adminNav;
  tableCol = [];
  title: string = '';
  
  constructor(private route: ActivatedRoute, private selecService: SelectorService, private store: Store<fromAdmin.ItemState>) { }

  ngOnInit() {
    this.route.params.subscribe(table => {
      this.title = table.collect;
      this.store.dispatch(new LoadAdminObjs(table.collect));
      this.getData(table.collect);
    });
  }

  getData(collection) {
    let selector = this.selecService.selectAll(collection);
    this.listData$ = this.store.pipe(select(selector));
    this.tableCol = this.selecService.displayColumns(collection);
  }
}
