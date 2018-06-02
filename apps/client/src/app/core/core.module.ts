import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BackandAuthService } from './services/backand-auth.service';
import { BackandItemService } from './services/backand-item.service';
import { IndexComponent } from './containers/index/index.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { PrivatePolicyComponent } from './components/private-policy/private-policy.component';
import { RoleGuardService } from './services/role-guard.service';
import { SharedModule } from '../shared/shared.module';
import { TitleResolveService } from './services/title-resolve.service';
import { UniversalInterceptor } from './interceptors/universal-interceptor.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    PrivatePolicyComponent,
    IndexComponent,
    ItemDetailComponent
  ],
  providers: [
    AuthGuardService,
    BackandAuthService,
    BackandItemService,
    RoleGuardService,
    TitleResolveService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    PrivatePolicyComponent
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule, private translate: TranslateService) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
    this.setTranslationForEN();
    this.translate.use('en');
  }

  public static universalInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    multi: true
  }

  private setTranslationForEN(): void {
    this.translate.setTranslation('en', {
      RI_TREE_LBL_ADD_NODE: 'Add data',
      RI_TREE_LBL_EDIT_NODE: 'Edit data',
      RI_TREE_LBL_REMOVE_NODE: 'Delete data',
      RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level',
      RI_FM_BTN_LANDSCAPE: 'Landscape',
      RI_FM_BTN_PORTRAIT: 'Portrait',
      RI_FM_BTN_SQUARE: 'Square',
      RI_FM_BTN_SAVE: 'Save',
      RI_FM_LBL_CHOOSE_SELECTION: 'Choose selection',
      RI_FM_LBL_DELETE_SELECTION: 'Delete selection',
      RI_FM_LBL_INVERSE_SELECTION: 'Inverse selection',
      RI_FM_LBL_SEARCH_FOR: 'Search for...',
      RI_FM_LBL_SELECT_ALL: 'Select all',
      RI_FM_LBL_UNSELECT_ALL: 'Unselect all',
    });
  }
}
