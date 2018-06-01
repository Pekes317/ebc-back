import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';
import { TitleResolveService } from '../core/services/title-resolve.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' }, resolve: { title: TitleResolveService } },
  { path: 'reset-pass', component: EbcResetComponent, data: { title: 'Reset Password' }, resolve: { title: TitleResolveService } },
  { path: 'signup', component: CreateUserComponent, data: { title: 'SignUp' }, resolve: { title: TitleResolveService } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
