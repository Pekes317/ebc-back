import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../core/services/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { TitleResolveService } from '../core/services/title-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    data: { title: 'My Dashboard' },
    resolve: { title: TitleResolveService },
    children: [
      {
        path: '',
        component: UserHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
