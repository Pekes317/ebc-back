import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as fromAuthStore from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('authStore', fromAuthStore.reducers, { metaReducers: fromAuthStore.metaReducers }),
  ],
  declarations: []
})
export class AuthStoreModule { }
