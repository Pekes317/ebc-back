import { Action } from '@ngrx/store';
import { auth } from 'firebase-admin';
import { UserRole } from '../models/user-role.model';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  ClearUsers = '[User] Clear Users',
  ErrorUsers = '[User] Error Users',
  GetUsers = '[User] Get Users',
  NextUsers = '[User] Next Users',
  UpdateUser = '[User] Update User',
  UpsertUser = '[User] Upsert User'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;

  constructor(
    public payload: { users: Array<auth.UserRecord>; next: string }
  ) {}
}

export class ClearUsers implements Action {
  readonly type = UserActionTypes.ClearUsers;
}

export class ErrorUsers implements Action {
  readonly type = UserActionTypes.ErrorUsers;
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
}

export class NextUsers implements Action {
  readonly type = UserActionTypes.NextUsers;

  constructor(public payload: string) {}
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;

  constructor(public payload: UserRole) {}
}

export class UpsertUser implements Action {
  readonly type = UserActionTypes.UpsertUser;

  constructor(public payload: { user: auth.UserRecord }) {}
}

export type UsersActions =
  | LoadUsers
  | ClearUsers
  | ErrorUsers
  | GetUsers
  | NextUsers
  | UpdateUser
  | UpsertUser;
