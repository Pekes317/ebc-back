import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { routing } from './back-office.routes';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';
import { BackOfficeDetailComponent } from './back-office-detail/back-office-detail.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [
    BackOfficeComponent,
    BackOfficeHomeComponent,
    BackOfficeListComponent,
    BackOfficeDetailComponent
  ]
})
export class BackOfficeModule { }
