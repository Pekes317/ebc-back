import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './reducers';
import { AdminDataService } from './services/admin-data.service';
import { AdminDataEffects } from './effects/admin-data.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ AdminDataEffects ]),
    StoreModule.forFeature('itemStore', reducers, { metaReducers: metaReducers })
  ],
  declarations: []
})
export class ItemStoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ItemStoreModule,
      providers: [ AdminDataService ]
    }; 
  }
}
