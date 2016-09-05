import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office';
import { BackandAuthService, BackandConfigService } from './shared';
import { HomeComponent } from './home';
import { appRoutingProviders, routing } from './app.routing';
import { MaterialModule } from './app.md.module';
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
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
