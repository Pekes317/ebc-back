import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../core/services/auth-guard.service';
import { AdminIndexComponent } from './containers/admin-index/admin-index.component';
import { FilemanagerComponent } from './containers/filemanager/filemanager.component';
import { ListComponent } from './containers/list/list.component';
import { RoleGuardService } from '../core/services/role-guard.service';

const routes: Routes = [
  {
    path: '', component: AdminIndexComponent, canActivate: [AuthGuardService, RoleGuardService],
    data: { roles: ['member', 'owner', 'admin'], title: 'Admin Dashboard' }
  },
  {
    path: 'file', component: FilemanagerComponent, canActivate: [AuthGuardService, RoleGuardService],
    data: { roles: ['member', 'owner', 'admin'], title: 'Filemanager' }
  },
  {
    path: ':collect', component: ListComponent, canActivate: [AuthGuardService, RoleGuardService],
    data: { roles: ['member', 'owner', 'admin'], title: 'Admin Items' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
