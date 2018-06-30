import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthStoreModule } from './auth-store/auth-store.module';
import { reducers, metaReducers } from './reducers';
import { environment } from '../../environments/environment';
import { FilesStoreModule } from './files-store/files-store.module';
import { FolderStoreModule } from './folder-store/folder-store.module';
import { ItemStoreModule } from './item-store/item-store.module';
import { RouterStateUtil } from './shared/router-state-util';
import { RouteEffects } from '../state/effects/route.effects';

@NgModule({
  imports: [
    AuthStoreModule.forRoot(),
    CommonModule,
    EffectsModule.forRoot([RouteEffects]),
    FilesStoreModule,
    FolderStoreModule,
    ItemStoreModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'route' }),
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