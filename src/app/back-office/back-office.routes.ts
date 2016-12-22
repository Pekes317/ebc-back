import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthResolve, RoleGuard } from './shared';
import { AuthGuard, TitleResolve } from '../shared';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';
import { BackOfficeFileComponent } from './back-office-file/back-office-file.component';
import { BackOfficeSvgComponent } from './back-office-svg/back-office-svg.component';
import { BackOfficeUsersComponent } from './back-office-users/back-office-users.component';

const officeRoutes: Routes = [
	{
		path: 'back-office',
		component: BackOfficeComponent,
		canActivate: [AuthGuard, RoleGuard],
		data: { title: 'Back Office' },
		resolve: { title: TitleResolve },
		children: [
			{
				path: '',
				component: BackOfficeHomeComponent
			},
				{
				path: 'file',
				component: BackOfficeFileComponent,
				data: { title: 'Back Office', list: 'templates' },
				resolve: { auth: AuthResolve, title: TitleResolve }
			},
			{
				path: 'items',
				component: BackOfficeListComponent,
				data: { title: 'Back Office', list: 'items' },
				resolve: { title: TitleResolve }
			},
			{
				path: 'samples',
				component: BackOfficeListComponent,
				data: { title: 'Back Office', list: 'samples' },
				resolve: { title: TitleResolve }
			},
				{
				path: 'svg',
				component: BackOfficeSvgComponent,
				data: { title: 'Back Office', list: 'svg' },
				resolve: { title: TitleResolve }
			},
			{
				path: 'templates',
				component: BackOfficeListComponent,
				data: { title: 'Back Office', list: 'templates' },
				resolve: { title: TitleResolve }
			},
			{
				path: 'users',
				component: BackOfficeUsersComponent,
				data: { title: 'Back Office', list: 'users' },
				resolve: { title: TitleResolve }
			}
		]
	 }
];

export const routing: ModuleWithProviders = RouterModule.forChild(officeRoutes);