import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as fromRoot from '../../reducers';
import * as fromSample from './sample.reducer';

export interface ItemState {
  // samples: fromSample.State
}

export interface State extends fromRoot.State {
  itemStore: ItemState;
}


export const reducers: ActionReducerMap<ItemState> = {
  // samples: fromSample.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
