import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './back-office.routes';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';
import { BackOfficeDetailComponent } from './back-office-detail/back-office-detail.component';
import { NavbarModule } from '../navbar/navbar.module';
import { BackOfficeFileComponent } from './back-office-file/back-office-file.component';
import { BackOfficeUsersComponent } from './back-office-users/back-office-users.component';
import { BackOfficeEditComponent } from './back-office-edit/back-office-edit.component';
import { AuthResolve, RoleGuard } from './shared';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    NavbarModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    BackOfficeComponent,
    BackOfficeHomeComponent,
    BackOfficeListComponent,
    BackOfficeDetailComponent,
    BackOfficeFileComponent,
    BackOfficeUsersComponent,
    BackOfficeEditComponent
  ],
  providers: [
    AuthResolve,
    RoleGuard
  ],
  entryComponents: [
    BackOfficeDetailComponent,
    BackOfficeEditComponent
  ]
})
export class BackOfficeModule { }
