import { Action } from '@ngrx/store';

import { ModalTypes } from '../services/items-types.enum';

export enum AdminDataActionTypes {
  LoadAdminObjs = '[AdminData] Load AdminObjs',
  AddAdminObj = '[AdminData] Add AdminObj',
  ErrorAdminObj = '[AdminData] Error Admin Obj',
  UpdateAdminObj = '[AdminData] Update AdminObj',
  DeleteAdminObjs = '[AdminData] Delete AdminObjs',
  ClearAdminObjs = '[AdminData] Clear AdminObjs',
  FinishAdminObj = '[AdminData] Finish AdminObj'
}

export class LoadAdminObjs implements Action {
  readonly type = AdminDataActionTypes.LoadAdminObjs;

  constructor(public payload: string) { }
}

export class AddAdminObj implements Action {
  readonly type = AdminDataActionTypes.AddAdminObj;

  constructor(public payload: { collection: string, data: ModalTypes }) { }
}

export class ErrorAdminObj implements Action {
  readonly type = AdminDataActionTypes.ErrorAdminObj;
}

export class FinishAdminObj implements Action {
  readonly type = AdminDataActionTypes.FinishAdminObj;
}

export class UpdateAdminObj implements Action {
  readonly type = AdminDataActionTypes.UpdateAdminObj;

  constructor(public payload: { collection: string, data: ModalTypes }) { }
}

export class DeleteAdminObjs implements Action {
  readonly type = AdminDataActionTypes.DeleteAdminObjs;

  constructor(public payload: { collection: string, ids: Array<number> }) { }
}

export class ClearAdminObjs implements Action {
  readonly type = AdminDataActionTypes.ClearAdminObjs;
}


export type AdminDataActions =
  LoadAdminObjs
  | AddAdminObj
  | ErrorAdminObj
  | FinishAdminObj
  | UpdateAdminObj
  | DeleteAdminObjs
  | ClearAdminObjs; 
