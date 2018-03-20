import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FileManagerModule } from '@rign/angular2-filemanager';
// import { TreeModule } from '@rign/angular2-tree';

import { RoleGuard } from './shared';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';
import { BackOfficeDetailComponent } from './back-office-detail/back-office-detail.component';
import { BackOfficeFileComponent } from './back-office-file/back-office-file.component';
import { BackOfficeUsersComponent } from './back-office-users/back-office-users.component';
import { BackOfficeEditComponent } from './back-office-edit/back-office-edit.component';
import { EbcMaterialModule } from '../ebc-material/ebc-material.module';
import { fileManagerConfig } from '../shared/filemanager.config';
import { NavbarModule } from '../navbar/navbar.module';
import { routing } from './back-office.routes';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    EbcMaterialModule,
    // FileManagerModule.forChild(fileManagerConfig),
    FormsModule,
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
    RoleGuard
  ],
  entryComponents: [
    BackOfficeDetailComponent,
    BackOfficeEditComponent
  ]
})
export class BackOfficeModule { }