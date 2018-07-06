import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'

import { ItemsTypes } from './items-types.enum';
import { LoadItems } from '../actions/item.actions';
import { LoadSamples } from '../actions/sample.actions';
import { LoadTemplates } from '../actions/template.actions';
import { ItemState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private store: Store<ItemState>) { }

  loadItems(collection: string, payload) {
    switch (collection) {
      case ItemsTypes.items:
        this.store.dispatch(new LoadItems({ items: payload }));
        break;
      case ItemsTypes.samples:
        this.store.dispatch(new LoadSamples({ samples: payload }));
        break;
      case ItemsTypes.templates:
        this.store.dispatch(new LoadTemplates({ templates: payload }))
        break;
      default:
        return false;
    }
  }
}
