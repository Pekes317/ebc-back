import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { adminNav } from '../../admin-nav';
import { GetUsers } from '../../../state/user-store/actions/user.actions';
import * as fromUsers from '../../../state/user-store/reducers';

@Component({
  selector: 'ebc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  nav = adminNav;
  listUsers$;

  constructor(private store: Store<fromUsers.UserState>) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.listUsers$ = this.store.pipe(select(fromUsers.getUsers));
  }
}
