import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './back-office.routes';
import { BackOfficeComponent } from './back-office.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    BackOfficeComponent
  ]
})
export class BackOfficeModule { }
