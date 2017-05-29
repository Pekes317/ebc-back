import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, SvgGuardService, TitleResolve } from './shared';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Home' }, resolve: { title: TitleResolve } },
	{ path: 'login', component: LoginComponent, data: { title: 'Login' }, resolve: { title: TitleResolve } },
	{ path: 'resetPass', component: EbcResetComponent, data: { title: 'Reset Password' }, resolve: { title: TitleResolve } },
	{
		path: 'card/:id', component: EbcSvgComponent,
		data: { title: 'Card' }, canDeactivate: [SvgGuardService],
		resolve: { title: TitleResolve }
	}
];

export const appRoutingProviders: any[] = [
	AuthGuard,
	SvgGuardService,
	TitleResolve
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);