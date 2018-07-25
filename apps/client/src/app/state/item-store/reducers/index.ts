import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as fromAdmin from './admin-data.reducer';
import * as fromItems from './item.reducer';
import * as fromRoot from '../../reducers';
import * as fromSample from './sample.reducer';
import * as fromTemplate from './template.reducer';
import * as selectors from './item-store.selectors';

export interface ItemState {
  admin: fromAdmin.State;
  items: fromItems.State;
  samples: fromSample.State;
  templates: fromTemplate.State;
}

export interface State extends fromRoot.State {
  itemStore: ItemState;
}

export const reducers: ActionReducerMap<any> = {
  admin: fromAdmin.reducer,
  items: fromItems.reducer,
  samples: fromSample.reducer,
  templates: fromTemplate.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const {
  selectItemStore,
  selectItems,
  selectSamples,
  selectTemplates
} = selectors;

export const getLoading = createSelector(
  selectItemStore,
  (state: ItemState) => state.admin.loading
);
