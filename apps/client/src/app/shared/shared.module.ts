import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CrumbComponent } from './components/crumb/crumb.component';
import { DrawerLayoutComponent } from './components/drawer-layout/drawer-layout.component';
import { MaterialModule } from './components/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    CrumbComponent,
    DrawerLayoutComponent
  ],
  exports: [
    CrumbComponent,
    DrawerLayoutComponent,
    MaterialModule,
    NavbarComponent
  ]
})
export class SharedModule { }