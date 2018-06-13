import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as fromAuth from './auth.reducer';

export interface State {
  state: fromAuth.State
}

export const initialState: State = {
  state: fromAuth.initialState
}

export const reducers: ActionReducerMap<State> = {
  state: fromAuth.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getAuthState = createFeatureSelector<fromAuth.State>('authState');

export const getAuthStatus = createSelector(
  getAuthState,
  fromAuth.getAuthStatus
);