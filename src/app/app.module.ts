import { NgModule } from '@angular/core';
import { BrowserModule, Title} from '@angular/platform-browser';

import { MaterialModule } from './md.module';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, MaterialModule, routing ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders, Title ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
