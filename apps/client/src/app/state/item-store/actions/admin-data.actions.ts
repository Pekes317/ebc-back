import { Action } from '@ngrx/store';

import { ModalTypes } from '../services/items-types.enum';

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

  constructor(public payload: string) { }
}

export class AddAdminObj implements Action {
  readonly type = AdminDataActionTypes.AddAdminObj;

  constructor(public payload: { collection: string, data: ModalTypes }) { }
}

export class UpsertAdminObj implements Action {
  readonly type = AdminDataActionTypes.UpsertAdminObj;

  constructor(public payload: { collection: string, data: ModalTypes }) { }
}

export class AddAdminObjs implements Action {
  readonly type = AdminDataActionTypes.AddAdminObjs;

  constructor(public payload: { collection: string, data: Array<ModalTypes> }) { }
}

export class UpsertAdminObjs implements Action {
  readonly type = AdminDataActionTypes.UpsertAdminObjs;

  constructor(public payload: { collection: string, data: Array<ModalTypes> }) { }
}

export class UpdateAdminObj implements Action {
  readonly type = AdminDataActionTypes.UpdateAdminObj;

  constructor(public payload: { collection: string, data: ModalTypes }) { }
}

export class UpdateAdminObjs implements Action {
  readonly type = AdminDataActionTypes.UpdateAdminObjs;

  constructor(public payload: { collection: string, data: Array<ModalTypes> }) { }
}

export class DeleteAdminObj implements Action {
  readonly type = AdminDataActionTypes.DeleteAdminObj;

  constructor(public payload: { collection: string, id: number }) { }
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
  | UpsertAdminObj
  | AddAdminObjs
  | UpsertAdminObjs
  | UpdateAdminObj
  | UpdateAdminObjs
  | DeleteAdminObj
  | DeleteAdminObjs
  | ClearAdminObjs; 
