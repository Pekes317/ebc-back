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
import * as selectors from './item-store.selectors';

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

export const { 
  selectItemStore,
  selectItems,
  selectSamples,
  selectTemplates 
} = selectors;