import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity'; 

import { ItemsTypes, ModalTypes } from './items-types.enum';
import { LoadItems, UpdateItem, AddItem, DeleteItems } from '../actions/item.actions';
import { LoadSamples, UpdateSample, AddSample, DeleteSamples } from '../actions/sample.actions';
import { LoadTemplates, UpdateTemplate, AddTemplate, DeleteTemplates } from '../actions/template.actions';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor() { }

  addItem(collection: string, payload) {
    switch (collection) {
      case ItemsTypes.items:
        return (new AddItem({ item: payload }));
      case ItemsTypes.samples:
        return (new AddSample({ sample: payload }));
      case ItemsTypes.templates:
        return (new AddTemplate({ template: payload }));
      default:
        return (new AddItem({ item: payload }));
    }
  }

  delItems(collection: string, payload) {
    switch (collection) {
      case ItemsTypes.items:
        return (new DeleteItems({ ids: payload }));
      case ItemsTypes.samples:
        return (new DeleteSamples({ ids: payload }));
      case ItemsTypes.templates:
        return (new DeleteTemplates({ ids: payload }));
      default:
        return (new DeleteItems({ ids: payload }));
    }
  }

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
        return (new UpdateItem({ item: this.updatePayload(payload) }));
      case ItemsTypes.samples:
        return (new UpdateSample({ sample: this.updatePayload(payload) }));
      case ItemsTypes.templates:
        return (new UpdateTemplate({ template: this.updatePayload(payload) }));
      default:
        return (new UpdateItem({ item: this.updatePayload(payload) }));
    }
  }

  private updatePayload(payload: ModalTypes) {
    const partial: Update<any> = {
      id: payload.id,
      changes: payload
    };
    return partial;
  }
}
