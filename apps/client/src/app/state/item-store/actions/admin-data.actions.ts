import { Action } from '@ngrx/store';

export enum AdminDataActionTypes {
  LoadAdminObjs = '[AdminData] Load AdminObjs',
  AddAdminObj = '[AdminData] Add AdminObj',
  UpsertAdminObj = '[AdminData] Upsert AdminObj',
  AddAdminObjs = '[AdminData] Add AdminObjs',
  UpsertAdminObjs = '[AdminData] Upsert AdminObjs',
  UpdateAdminObj = '[AdminData] Update AdminObj',
  UpdateAdminObjs = '[AdminData] Update AdminObjs',
  DeleteAdminObj = '[AdminData] Delete AdminObj',
  DeleteAdminObjs = '[AdminData] Delete AdminObjs',
  ClearAdminObjs = '[AdminData] Clear AdminObjs'
}

export class LoadAdminObjs implements Action {
  readonly type = AdminDataActionTypes.LoadAdminObjs;

  constructor(public payload: string) {}
}

export type AdminDataActions = LoadAdminObjs;
