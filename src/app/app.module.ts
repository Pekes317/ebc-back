import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { BackandService } from '@backand/angular2-sdk';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxWarehouseModule } from 'ngx-warehouse';
import * as io from 'socket.io-client';
window["io"] = io;

import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office';
import { BackandAuthService } from './shared/backand-auth.service';
import { BackandItemService } from './shared/backand-item.service';
import { HomeComponent } from './home';
import { appRoutingProviders, routing } from './app.routing';
import { LoginComponent } from './login';
import { NavbarModule } from './navbar/navbar.module';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';;

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BackOfficeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InlineSVGModule,
    MaterialModule,
    NavbarModule,
    NgxWarehouseModule,
    routing
  ],
  declarations: [
    AppComponent,
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
    BackandService
  ],
  entryComponents: [
    PrivatePolicyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
