import { createFeatureSelector, createSelector } from '@ngrx/store';


import { ItemState } from './index';

export const selectItemStore = createFeatureSelector<ItemState>('itemStore');

export const selectItems = createSelector(
  selectItemStore,
  (state: ItemState) => state.items 
);

export const selectSamples = createSelector(
  selectItemStore,
  (state: ItemState) => state.samples 
);

export const selectTemplates = createSelector(
  selectItemStore,
  (state: ItemState) => state.templates
);