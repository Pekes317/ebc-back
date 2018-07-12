import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map, tap, exhaustMap, mergeMap } from 'rxjs/operators';

import { AdminDataService } from '../services/admin-data.service';
import { BackandItemService } from '../../../core/services/backand-item.service';
import { ItemState } from '../reducers';
import { LoadAdminObjs, AdminDataActionTypes, UpdateAdminObj } from '../actions/admin-data.actions';
@Injectable()
export class AdminDataEffects {

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType<LoadAdminObjs>(AdminDataActionTypes.LoadAdminObjs),
    map(action => action.payload),
    mergeMap(type => {
      return this.backend.getList(type).pipe(
        map((data: Array<any>) => this.adminData.loadItems(type, data))
      )
    })
  );

  @Effect()
  updateObj$ = this.actions$.pipe(
    ofType<UpdateAdminObj>(AdminDataActionTypes.UpdateAdminObj),
    map(action => action.payload),
    map(updated => {
      return this.adminData.updateItem(updated.collection, updated.data);
    })
  );

  constructor(private actions$: Actions, private adminData: AdminDataService,
    private backend: BackandItemService, private data: DataPersistence<ItemState>) { }
}
