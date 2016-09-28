import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office';
import { BackandAuthService } from './shared/backand-auth.service';
import { BackandConfigService } from './shared/backand-config.service';
import { BackandItemService } from './shared/backand-item.service';
import { HomeComponent } from './home';
import { appRoutingProviders, routing } from './app.routing';
import { LoginComponent } from './login';

@NgModule({
  imports: [
    BrowserModule,
    BackOfficeModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [AppComponent, HomeComponent, LoginComponent],
  providers: [
    appRoutingProviders,
    BackandAuthService,
    BackandConfigService,
    BackandItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
