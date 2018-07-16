import { Action } from '@ngrx/store';
import { auth } from 'firebase-admin';
 
export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  GetUsers = '[User] Get Users',
  NextUsers = '[User] Next Users'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;

  constructor(public payload: { users: Array<auth.UserRecord>, next: string }) {}
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
}

export class NextUsers implements Action {
  readonly type = UserActionTypes.NextUsers;

  constructor(public payload: string) {}
}

export type UsersActions = LoadUsers | GetUsers | NextUsers;
