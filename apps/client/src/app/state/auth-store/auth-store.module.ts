import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './reducers';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('authStore', reducers, { metaReducers: metaReducers }),
  ],
  declarations: []
})
export class AuthStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthStoreModule,
      providers: [ AuthService ]
    }; 
  }
}
