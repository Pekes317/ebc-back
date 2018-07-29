import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';

import { AdminDataService } from '../services/admin-data.service';
import { ItemService } from '../../../core/services/item.service';
import {
  AddAdminObj,
  AdminDataActionTypes,
  DeleteAdminObjs,
  FinishAdminObj,
  LoadAdminObjs,
  UpdateAdminObj
} from '../actions/admin-data.actions';
@Injectable()
export class AdminDataEffects {
  @Effect()
  addData$ = this.actions$.pipe(
    ofType<AddAdminObj>(AdminDataActionTypes.AddAdminObj),
    map(action => action.payload),
    mergeMap(add => {
      return this.backend
        .addItem(add.collection, add.data)
        .pipe(
          switchMap(obj => [
            this.adminData.addItem(add.collection, obj),
            new FinishAdminObj()
          ])
        );
    })
  );

  @Effect()
  delData$ = this.actions$.pipe(
    ofType<DeleteAdminObjs>(AdminDataActionTypes.DeleteAdminObjs),
    map(action => action.payload),
    exhaustMap(del => {
      const del$ = from(this.servDel(del.collection, del.ids));
      return del$.pipe(
        switchMap(() => [
          this.adminData.delItems(del.collection, del.ids),
          new FinishAdminObj()
        ])
      );
    })
  );

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType<LoadAdminObjs>(AdminDataActionTypes.LoadAdminObjs),
    map(action => action.payload),
    mergeMap(type => {
      let user = (type === 'items');
      return this.backend
        .getList(type, user)
        .pipe(
          switchMap((data: Array<any>) => [
            this.adminData.loadItems(type, data),
            new FinishAdminObj()
          ])
        );
    })
  );

  @Effect()
  updateData$ = this.actions$.pipe(
    ofType<UpdateAdminObj>(AdminDataActionTypes.UpdateAdminObj),
    map(action => action.payload),
    mergeMap(updated => {
      return this.backend
        .updateItem(updated.collection, updated.data.id, updated.data)
        .pipe(
          switchMap(() => [
            this.adminData.updateItem(updated.collection, updated.data),
            new FinishAdminObj()
          ])
        );
    })
  );

  constructor(
    private actions$: Actions,
    private adminData: AdminDataService,
    private backend: ItemService
  ) {}

  private async servDel(collection, ids) {
    await this.backend.deleteItem(collection, ids);
  }
}
