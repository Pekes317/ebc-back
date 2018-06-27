import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../core/services/auth-guard.service';
import { AdminIndexComponent } from './containers/admin-index/admin-index.component';

const routes: Routes = [
  {
    path: '',
    component: AdminIndexComponent,
    canActivate: [AuthGuardService],
    data: { roles: ['member', 'admin'], title: 'Admin Dashboard' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
