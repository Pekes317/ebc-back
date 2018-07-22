import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './reducers';
import { UserEffects } from './effects/user.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('userStore', reducers, {
      metaReducers: metaReducers
    })
  ],
  declarations: []
})
export class UserStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserStoreModule,
      providers: []
    };
  }
}
