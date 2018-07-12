import { Injectable } from '@angular/core';

import { ItemsTypes } from './items-types.enum';
import { LoadItems, UpdateItem } from '../actions/item.actions';
import { LoadSamples, UpdateSample } from '../actions/sample.actions';
import { LoadTemplates, UpdateTemplate } from '../actions/template.actions';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor() { }

  loadItems(collection: string, payload) {
    switch (collection) {
      case ItemsTypes.items:
        return (new LoadItems({ items: payload }));
      case ItemsTypes.samples:
        return (new LoadSamples({ samples: payload }));
      case ItemsTypes.templates:
        return (new LoadTemplates({ templates: payload }));
      default:
        return (new LoadItems({ items: payload }));
    }
  }

  updateItem(collection: string, payload) {
    switch (collection) {
      case ItemsTypes.items:
        return (new UpdateItem({ item: payload }));
      case ItemsTypes.samples:
        return (new UpdateSample({ sample: payload }));
      case ItemsTypes.templates:
       return (new UpdateTemplate({ template: payload }));
      default:
        return (new UpdateItem({ item: payload }));
    }
  }
}
