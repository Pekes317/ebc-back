import { Action } from '@ngrx/store';

export enum RouteActionTypes {
  LoadRoute = '[Route] Load Route'
}

export class LoadRoute implements Action {
  readonly type = RouteActionTypes.LoadRoute;

  constructor(public payload: { routeRoles: Array<string> }) { };
}

export type RouteActions = LoadRoute;
