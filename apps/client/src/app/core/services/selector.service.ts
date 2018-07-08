import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ItemsTypes } from '../../state/item-store//services/items-types.enum';
import * as fromItems from '../../state/item-store/reducers/item.reducer';
import * as fromSamples from '../../state/item-store/reducers/sample.reducer';
import * as fromTemplates from '../../state/item-store/reducers/template.reducer';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {
  baseColumns: Array<string> = ['select', 'edit', 'id', 'name', 'desc', 'media', 'pic', 'flyer', 'ready', 'disable'];

  constructor() { }

  displayColumns(dataType: ItemsTypes) {
    switch (dataType) {
      case ItemsTypes.items:
        let itemsCols = this.baseColumns.concat(['data']);
        return itemsCols;
      case ItemsTypes.samples:
        return this.baseColumns;
      case ItemsTypes.templates:
        return this.baseColumns;
      default:
        return this.baseColumns;
    }
  }

  selectAll(dataType: ItemsTypes) {
    switch (dataType) {
      case ItemsTypes.items:
        return fromItems.selectAll;
      case ItemsTypes.samples:
        return fromSamples.selectAll;
      case ItemsTypes.templates:
        return fromTemplates.selectAll;
      default:
        return fromItems.selectAll;
    }
  }
}
