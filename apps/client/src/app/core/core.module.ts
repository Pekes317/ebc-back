import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './containers/app/app.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BackandAuthService } from './services/backand-auth.service';
import { BackandItemService } from './services/backand-item.service';
import { IndexComponent } from './containers/index/index.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { PrivatePolicyComponent } from './components/private-policy/private-policy.component';
import { RoleGuardService } from './services/role-guard.service';
import { SelectorService } from './services/selector.service';
import { SharedModule } from '../shared/shared.module';
import { UniversalInterceptor } from './interceptors/universal-interceptor.service';


@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    PrivatePolicyComponent,
    IndexComponent,
    ItemDetailComponent
  ],
  entryComponents: [
    PrivatePolicyComponent
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuardService,
        BackandAuthService,
        BackandItemService,
        RoleGuardService,
        SelectorService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true
        }
      ],
    };
  }

  public static universalInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    multi: true
  }
}
