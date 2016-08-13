import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './md.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar';

@NgModule({
  imports: [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
