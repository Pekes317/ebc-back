import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office';
import { BackandAuthService } from './shared/backand-auth.service';
import { BackandConfigService } from './shared/backand-config.service';
import { BackandItemService } from './shared/backand-item.service';
import { HomeComponent } from './home';
import { appRoutingProviders, routing } from './app.routing';
import { LoginComponent } from './login';
import { NavbarModule } from './navbar/navbar.module';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';;

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BackOfficeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InlineSVGModule,
    MaterialModule.forRoot(),
    NavbarModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EbcSvgComponent,
    PrivatePolicyComponent
  ],
  providers: [
    appRoutingProviders,
    BackandAuthService,
    BackandConfigService,
    BackandItemService
  ],
  entryComponents: [
    PrivatePolicyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
