import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office';
import { BackandConfigService } from './shared';
import { HomeComponent } from './home';
import { appRoutingProviders, routing } from './app.routing';
import { MaterialModule } from './app.md.module';


@NgModule({
  imports: [
    BrowserModule,
    BackOfficeModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [appRoutingProviders, BackandConfigService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
