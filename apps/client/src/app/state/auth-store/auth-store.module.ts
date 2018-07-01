import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromAuthStore from './reducers';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('authStore', fromAuthStore.reducers, { metaReducers: fromAuthStore.metaReducers }),
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
