import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../core/services/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './containers/index/index.component';
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
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
