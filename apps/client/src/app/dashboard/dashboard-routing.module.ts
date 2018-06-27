import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../core/services/auth-guard.service';
import { RoleGuardService } from '../core/services/role-guard.service';
import { DashboardIndexComponent } from './containers/dashboard-index/dashboard-index.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardIndexComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: { roles: ['user', 'member', 'admin'], title: 'My Dashboard' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
