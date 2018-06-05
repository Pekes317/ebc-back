import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './components/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrumbComponent } from './components/crumb/crumb.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    NavbarComponent,
    CrumbComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
