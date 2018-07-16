import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { UserActionTypes, GetUsers } from '../actions/user.actions';
import { } from '../../../core/services/auth.service'

@Injectable()
export class UserEffects {

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(UserActionTypes.GetUsers),
    map(action => action.type)
  )

  constructor(private actions$: Actions) {}
}
