import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './reducers';
import { environment } from '../../environments/environment';
import { RouterStateUtil } from './shared/router-state-util';
import { TitleEffects } from '../state/effects/title.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([TitleEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class StateModule {
  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        { provide: RouterStateSerializer, useClass:  RouterStateUtil }
      ]
    };
  }
}