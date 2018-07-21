import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { adminNav } from '../../admin-nav';
import { GetUsers, NextUsers } from '../../../state/user-store/actions/user.actions';
import * as fromUsers from '../../../state/user-store/reducers';

@Component({
  selector: 'ebc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loaded$;
  listUsers$;
  nav = adminNav;
  nextToken: string = '';

  constructor(private store: Store<fromUsers.UserState>) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.listUsers$ = this.store.pipe(select(fromUsers.getUsers));
    this.loaded$ = this.store.pipe(select(fromUsers.getLoad));
    this.hasNext();
  }

  hasNext() {
    this.store.pipe(select(fromUsers.getNext)).subscribe(token => {
      this.nextToken = token;
    });
  }

  nextGroup(end) {
    let isNext = (this.nextToken === '') ? false : true;
    if (isNext && end) {
      this.store.dispatch(new NextUsers(this.nextToken));
    }
  }
}
