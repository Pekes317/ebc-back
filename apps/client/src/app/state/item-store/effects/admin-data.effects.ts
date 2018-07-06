import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { AdminDataService } from '../services/admin-data.service';
import { BackandItemService } from '../../../core/services/backand-item.service';
import { LoadAdminObjs, AdminDataActionTypes } from '../actions/admin-data.actions';

@Injectable()
export class AdminDataEffects {

  @Effect({ dispatch: false })
  loadData$ =  this.actions$.pipe(
    ofType<LoadAdminObjs>(AdminDataActionTypes.LoadAdminObjs),
    map(action => action.payload),
    tap(type => {
      this.backend.getList(type).subscribe(
        (data) => this.adminData.loadItems(type, data),
        err => console.log(err))
    })
  )

  constructor(private actions$: Actions, private adminData: AdminDataService, private backend: BackandItemService) {}
}
