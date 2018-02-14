import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthResolve, RoleGuard } from './shared';
import { AuthGuard, TitleResolve } from '../shared';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';
import { BackOfficeFileComponent } from './back-office-file/back-office-file.component';
import { BackOfficeUsersComponent } from './back-office-users/back-office-users.component';

const officeRoutes: Routes = [
	{
		path: 'back-office',
		component: BackOfficeComponent,
		canActivate: [],
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
				resolve: { title: TitleResolve }
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