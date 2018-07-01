import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../reducers';

export interface AuthState {
  current: fromAuth.State
}

export interface State extends fromRoot.State {
  authStore: AuthState;
}

export const initialState: AuthState = {
  current: fromAuth.initialState
}

export const reducers: ActionReducerMap<AuthState> = {
  current: fromAuth.reducer
};

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];

export const selectAuthState = createFeatureSelector<AuthState>('authStore');

export const getAuthStatus = createSelector(
  selectAuthState,
  (state: AuthState) => state.current.status
);

export const getAuthUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.current.user
);