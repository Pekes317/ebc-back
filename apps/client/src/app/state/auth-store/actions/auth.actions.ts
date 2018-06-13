import { Action } from '@ngrx/store';

import { Authenticate } from '../models/authenticate.model';
import { User } from '../../../core/models/user.model';
import { UserState } from '../models/user-state.model';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;

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

  constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export type AuthActions = LoadAuths | Login | LoginSuccess | LoginFailure | LoginRedirect;
