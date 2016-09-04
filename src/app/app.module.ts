import { NgModule } from '@angular/core';
import { BrowserModule, Title} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { appRoutingProviders, routing } from './app.routing';
import { MaterialModule } from './app.md.module';
import { TitleResolve } from './app.title.resolve';
import { BackOfficeModule } from './back-office/';

@NgModule({
  imports: [ BrowserModule, MaterialModule.forRoot(), BackOfficeModule, routing ],
  declarations: [ AppComponent, HomeComponent ],
  providers: [ appRoutingProviders, Title, TitleResolve ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
