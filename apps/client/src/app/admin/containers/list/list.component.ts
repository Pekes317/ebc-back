import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';

import { adminNav } from '../../admin-nav';
import * as formAdmin from '../../../state/item-store/reducers';
import { LoadAdminData } from '../../../state/item-store/actions/admin-data.actions';

@Component({
  selector: 'ebc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  nav = adminNav;
  title: string = '';
  
  constructor(private route: ActivatedRoute, private store: Store<formAdmin.ItemState>) { }

  ngOnInit() {
    this.route.params.subscribe(table => {
      this.title = table.collect;
      this.store.dispatch(new LoadAdminData(table.collect));
    });
  }

}
