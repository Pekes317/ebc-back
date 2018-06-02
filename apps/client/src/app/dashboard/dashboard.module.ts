import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './containers/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, IndexComponent]
})
export class DashboardModule { }
