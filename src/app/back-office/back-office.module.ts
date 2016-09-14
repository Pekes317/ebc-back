import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './back-office.routes';
import { BackOfficeComponent } from './back-office.component';

import { MaterialModule } from '../app-md.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [
    BackOfficeComponent
  ]
})
export class BackOfficeModule { }
