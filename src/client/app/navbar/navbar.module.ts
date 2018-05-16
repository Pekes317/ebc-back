import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbcMaterialModule } from '../ebc-material/ebc-material.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    EbcMaterialModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
