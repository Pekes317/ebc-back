import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as fromRoot from '../../reducers';
import * as fromUsers from './user.reducer';

export interface UserState {
  register: fromUsers.State
}

export interface State extends fromRoot.State {
  userStore: UserState;
}

export const reducers: ActionReducerMap<any> = {
  register: fromUsers.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const userStore = createFeatureSelector<UserState>('userStore');

export const getUsers = createSelector(
  userStore,
  (state: UserState) => state.register.users
);

export const getNext = createSelector(
  userStore,
  (state: UserState) => state.register.next
);