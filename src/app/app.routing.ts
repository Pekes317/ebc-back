import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth-guard.service';
import { SvgGuardService } from './shared/svg-guard.service';
import { TitleResolve } from './shared/title-resolve.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Electonic Business Card' }, resolve: { title: TitleResolve } },
	{ path: 'login', component: LoginComponent, data: { title: 'Login' }, resolve: { title: TitleResolve } },
	{ path: 'signup', component: CreateUserComponent, data: { title: 'SignUp' }, resolve: { title: TitleResolve } },
	{ path: 'reset-pass', component: EbcResetComponent, data: { title: 'Reset Password' }, resolve: { title: TitleResolve } },
	{ path: 'card/:id', component: EbcSvgComponent,	data: { title: 'Card' }, resolve: { title: TitleResolve } }
];

export const appRoutingProviders: any[] = [
	AuthGuard,
	SvgGuardService,
	TitleResolve
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);