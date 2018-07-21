import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { auth } from 'firebase-admin';
import { map, exhaustMap } from 'rxjs/operators';

import { GetUsers, UserActionTypes, LoadUsers, NextUsers } from '../actions/user.actions';
import { AuthService } from '../../../core/services/auth.service';

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(UserActionTypes.GetUsers),
    map(action => action.type),
    exhaustMap(() => {
      return this.auth.getUsers().pipe(
        map((userList: auth.ListUsersResult) => new LoadUsers({ users: userList.users, next: userList.pageToken  }))
      )
    })
  );

  @Effect()
  nextUsers$ = this.actions$.pipe(
    ofType<NextUsers>(UserActionTypes.NextUsers),
    map(action => action.payload),
    exhaustMap(token => {
      return this.auth.getUsers(token).pipe(
        map((userList: auth.ListUsersResult) => new LoadUsers({ users: userList.users, next: userList.pageToken  }))
      )
    })
  );

  constructor(private actions$: Actions, private auth: AuthService) {}
}
