import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './back-office.routes';
import { BackOfficeComponent } from './back-office.component';

import { MaterialModule } from '../app-md.module';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [
    BackOfficeComponent,
    BackOfficeListComponent
  ]
})
export class BackOfficeModule { }
