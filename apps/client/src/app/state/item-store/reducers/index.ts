import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as fromItems from './item.reducer';
import * as fromRoot from '../../reducers';
import * as fromSample from './sample.reducer';
import * as fromTemplate from './template.reducer';

export interface ItemState {
  items: fromItems.State;
  samples: fromSample.State;
  templates: fromTemplate.State;
}

export interface State extends fromRoot.State {
  itemStore: ItemState;
}

export const reducers: ActionReducerMap<any> = {
  items: fromItems.reducer,
  samples: fromSample.reducer,
  templates: fromTemplate.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectItemState = createFeatureSelector<ItemState>('itemStore');

export const selectItems = createSelector(
  selectItemState,
  (state: ItemState) => state.items 
);

export const selectSamples = createSelector(
  selectItemState,
  (state: ItemState) => state.samples 
);

export const selectTemplates = createSelector(
  selectItemState,
  (state: ItemState) => state.templates
);