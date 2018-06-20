import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './containers/create-user/create-user.component';
import { LoginComponent } from './containers/login/login.component';
import { ResetComponent } from './containers/reset/reset.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { roles: ['all'], title: 'Login' } },
  { path: 'reset-pass', component: ResetComponent, data: { roles: ['all'], title: 'Reset Password' } },
  { path: 'signup', component: CreateUserComponent, data: { roles: ['all'], title: 'SignUp' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
