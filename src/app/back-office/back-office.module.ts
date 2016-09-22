import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './back-office.routes';
import { BackOfficeComponent } from './back-office.component';

import { MaterialModule } from '../app-md.module';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [
    BackOfficeComponent,
    BackOfficeHomeComponent,
    BackOfficeListComponent
  ]
})
export class BackOfficeModule { }
