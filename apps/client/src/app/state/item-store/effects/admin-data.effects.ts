import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';

import { AdminDataService } from '../services/admin-data.service';
import { ItemService } from '../../../core/services/item.service';
import { AddAdminObj, AdminDataActionTypes, LoadAdminObjs, UpdateAdminObj, DeleteAdminObjs } from '../actions/admin-data.actions';
@Injectable()
export class AdminDataEffects {

  @Effect()
  addData$ = this.actions$.pipe(
    ofType<AddAdminObj>(AdminDataActionTypes.AddAdminObj),
    map(action => action.payload),
    mergeMap(add => {
      return this.backend.addItem(add.collection, add.data)
        .pipe(map(obj => this.adminData.addItem(add.collection, obj)))
    })
  );

  @Effect()
  delData$ = this.actions$.pipe(
    ofType<DeleteAdminObjs>(AdminDataActionTypes.DeleteAdminObjs),
    map(action => action.payload),
    exhaustMap(del => {
      return this.servDel(del.collection, del.ids)
       .then(() => this.adminData.delItems(del.collection, del.ids))
    })
  );

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType<LoadAdminObjs>(AdminDataActionTypes.LoadAdminObjs),
    map(action => action.payload),
    mergeMap(type => {
      return this.backend.getList(type).pipe(
        map((data: Array<any>) => this.adminData.loadItems(type, data)))
    })
  );

  @Effect()
  updateData$ = this.actions$.pipe(
    ofType<UpdateAdminObj>(AdminDataActionTypes.UpdateAdminObj),
    map(action => action.payload),
    mergeMap(updated => {
      return this.backend.updateItem(updated.collection, updated.data.id, updated.data)
        .pipe(map(obj => this.adminData.updateItem(updated.collection, updated.data)));
    })
  );

  constructor(private actions$: Actions, private adminData: AdminDataService, private backend: ItemService) { }

  private async servDel(collection, ids) {
    await this.backend.deleteItem(collection, ids);
  }
}
