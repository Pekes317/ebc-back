import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as fromRoot from '../../reducers';

export interface UserState {

}

export interface State extends fromRoot.State {
  userStore: UserState;
}

export const reducers: ActionReducerMap<UserState> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
