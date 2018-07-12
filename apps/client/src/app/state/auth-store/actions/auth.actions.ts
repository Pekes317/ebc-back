import { Action } from '@ngrx/store';

import { Authenticate } from '../models/authenticate.model';
import { User } from '../../../core/models/user.model';
import { UserState } from '../models/user-state.model';

export enum AuthActionTypes {
  LoadAuth = '[Auth] Load Auth',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export class LoadAuth implements Action {
  readonly type = AuthActionTypes.LoadAuth;

  constructor(public payload: { user: User, userState: UserState }) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Authenticate) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;

  constructor(public payload: string) {}
}

export type AuthActions = LoadAuth | Login | LoginSuccess | LoginFailure | LoginRedirect | Logout;
