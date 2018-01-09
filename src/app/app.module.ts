import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackandService } from '@backand/angular2-sdk';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxWarehouseModule, WarehouseConfig, DRIVER_TYPE } from 'ngx-warehouse';
import * as io from 'socket.io-client';
window["io"] = io;

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { BackOfficeModule } from './back-office';
import { BackandAuthService } from './shared/backand-auth.service';
import { BackandItemService } from './shared/backand-item.service';
import { EbcMaterialModule } from './ebc-material/ebc-material.module';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NavbarModule } from './navbar/navbar.module';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';

const ebcConfig: WarehouseConfig = {
  driver: DRIVER_TYPE.DEFAULT,
  name: 'ebcback',
  version: 1.0,
  storeName: 'ebc_store',
  description: 'EBC Back Office'
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ebc-server' }),
    BackOfficeModule,
    EbcMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InlineSVGModule,
    NavbarModule,
    NgxWarehouseModule.configureWarehouse(ebcConfig),
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
