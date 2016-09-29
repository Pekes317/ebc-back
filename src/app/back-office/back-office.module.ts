import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { routing } from './back-office.routes';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';
import { BackOfficeDetailComponent } from './back-office-detail/back-office-detail.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    routing
  ],
  declarations: [
    BackOfficeComponent,
    BackOfficeHomeComponent,
    BackOfficeListComponent,
    BackOfficeDetailComponent
  ],
})
export class BackOfficeModule { }
