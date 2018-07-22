import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { auth } from 'firebase-admin';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';

import {
  GetUsers,
  UserActionTypes,
  LoadUsers,
  NextUsers,
  ErrorUsers,
  UpdateUser,
  UpsertUser
} from '../actions/user.actions';
import { AuthService } from '../../../core/services/auth.service';
import { AlertService } from '../../../core/services/alert.service';

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(UserActionTypes.GetUsers),
    map(action => action.type),
    exhaustMap(() => {
      return this.auth.getUsers().pipe(
        map(
          (userList: auth.ListUsersResult) =>
            new LoadUsers({ users: userList.users, next: userList.pageToken })
        ),
        catchError(err => of(console.log(err), new ErrorUsers()))
      );
    })
  );

  @Effect()
  nextUsers$ = this.actions$.pipe(
    ofType<NextUsers>(UserActionTypes.NextUsers),
    map(action => action.payload),
    exhaustMap(token => {
      return this.auth.getUsers(token).pipe(
        map(
          (userList: auth.ListUsersResult) =>
            new LoadUsers({ users: userList.users, next: userList.pageToken })
        ),
        catchError(err => of(console.log(err), new ErrorUsers()))
      );
    })
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType<UpdateUser>(UserActionTypes.UpdateUser),
    map(action => action.payload),
    exhaustMap(role => {
      return this.auth.updateRole(role).pipe(
        map((user: auth.UserRecord) => new UpsertUser({ user: user })),
        catchError(err => of(console.log(err), new ErrorUsers()))
      )
    }),
    tap(() => this.alerts.isAlert(`User's Role has been updated.`, 'Okay'))
  )

  constructor(private actions$: Actions, private auth: AuthService, private alerts: AlertService) {}
}
