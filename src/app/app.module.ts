import { NgModule } from '@angular/core';
import { BrowserModule, Title} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { appRoutingProviders, routing } from './app.routing';
import { MaterialModule } from './app.md.module';

@NgModule({
  imports: [ BrowserModule, MaterialModule.forRoot(), routing ],
  declarations: [ AppComponent, HomeComponent ],
  providers: [ appRoutingProviders, Title ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
