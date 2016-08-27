import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './md.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';

@NgModule({
  imports: [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
