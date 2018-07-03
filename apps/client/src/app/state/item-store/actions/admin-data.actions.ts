import { Action } from '@ngrx/store';

export enum AdminDataActionTypes {
  LoadAdminData = '[AdminData] Load AdminData'
}

export class LoadAdminData implements Action {
  readonly type = AdminDataActionTypes.LoadAdminData;

  constructor(public payload: string) {}
}

export type AdminDataActions = LoadAdminData;
