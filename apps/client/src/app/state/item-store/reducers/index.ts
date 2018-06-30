import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import * as fromItem from './item.reducer';
import * as fromRoot from '../../reducers';

export interface ItemState {
  items: fromItem.State
}

export interface State extends fromRoot.State {
  itemStore: ItemState
}

export const reducers: ActionReducerMap<ItemState> = {
  items: fromItem.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
