import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromItemStore from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('itemStore', fromItemStore.reducers, { metaReducers: fromItemStore.metaReducers })
  ],
  declarations: []
})
export class ItemStoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ItemStoreModule,
      providers: [ ]
    }; 
  }
}
