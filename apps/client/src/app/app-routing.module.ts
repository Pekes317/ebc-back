import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';
import { TitleResolveService } from './core/services/title-resolve.service'

const routes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Electonic Business Card' }, resolve: { title: TitleResolveService } },
	{ path: 'login', component: LoginComponent, data: { title: 'Login' }, resolve: { title: TitleResolveService } },
	{ path: 'signup', component: CreateUserComponent, data: { title: 'SignUp' }, resolve: { title: TitleResolveService } },
	{ path: 'reset-pass', component: EbcResetComponent, data: { title: 'Reset Password' }, resolve: { title: TitleResolveService } },
	{ path: 'card/:id', component: EbcSvgComponent, data: { title: 'Card' }, resolve: { title: TitleResolveService } },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
