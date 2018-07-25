import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { auth } from 'firebase-admin';
import { Observable } from 'rxjs';

import { adminNav } from '../../admin-nav';
import {
  GetUsers,
  NextUsers,
  ClearUsers,
  UpdateUser
} from '../../../state/user-store/actions/user.actions';
import * as fromUsers from '../../../state/user-store/reducers';

@Component({
  selector: 'ebc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loading$: Observable<boolean>;
  listUsers$: Observable<Array<auth.UserRecord>>;
  nav = adminNav;
  nextToken: string = '';

  constructor(private store: Store<fromUsers.UserState>) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.listUsers$ = this.store.pipe(select(fromUsers.getUsers));
    this.loading$ = this.store.pipe(select(fromUsers.getLoad));
    this.hasNext();
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearUsers());
  }

  hasNext() {
    this.store.pipe(select(fromUsers.getNext)).subscribe(token => {
      this.nextToken = token;
    });
  }

  nextGroup(end) {
    let isNext = this.nextToken === '' ? false : true;
    if (isNext && end) {
      this.store.dispatch(new NextUsers(this.nextToken));
    }
  }

  updateRole(secRole) {
    this.store.dispatch(new UpdateUser(secRole));
  }
}
