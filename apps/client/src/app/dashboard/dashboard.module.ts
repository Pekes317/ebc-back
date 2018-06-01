import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, UserHomeComponent]
})
export class DashboardModule { }
