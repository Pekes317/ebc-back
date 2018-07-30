import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './containers/create-user/create-user.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetComponent } from './containers/reset/reset.component';
import { RoleGuardService } from '../core/services/role-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { roles: ['all'], title: 'Login' }, canActivate: [RoleGuardService] },
  { path: 'reset-pass', component: ResetComponent, data: { roles: ['all'], title: 'Reset Password' }, canActivate: [RoleGuardService] },
  { path: 'signup', component: CreateUserComponent, data: { roles: ['all'], title: 'SignUp' }, canActivate: [RoleGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
