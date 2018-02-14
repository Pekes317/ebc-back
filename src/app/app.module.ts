import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InlineSVGModule } from 'ng-inline-svg';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as io from 'socket.io-client';
// window["io"] = io;

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { AuthInterceptor } from './shared/auth.interceptor';
import { BackOfficeModule } from './back-office';
import { BackandAuthService } from './shared/backand-auth.service';
import { BackandItemService } from './shared/backand-item.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { EbcMaterialModule } from './ebc-material/ebc-material.module';
import { environment } from '../environments/environment';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NavbarModule } from './navbar/navbar.module';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ebc-server' }),
    BackOfficeModule,
    EbcMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    InlineSVGModule,
    NavbarModule,
    routing
  ],
  declarations: [
    AppComponent,
    CreateUserComponent,
    HomeComponent,
    LoginComponent,
    EbcSvgComponent,
    PrivatePolicyComponent,
    EbcResetComponent
  ],
  providers: [
    appRoutingProviders,
    BackandAuthService,
    BackandItemService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    PrivatePolicyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
