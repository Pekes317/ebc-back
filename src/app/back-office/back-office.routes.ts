import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, TitleResolve } from '../shared';
import { BackOfficeComponent } from './back-office.component';
import { BackOfficeHomeComponent } from './back-office-home/back-office-home.component';
import { BackOfficeListComponent } from './back-office-list/back-office-list.component';

const officeRoutes: Routes = [
	{
		path: 'back-office',
		component: BackOfficeComponent,
		canActivate: [AuthGuard],
		data: { title: 'Back Office' },
		resolve: { title: TitleResolve },
		children: [
			{
				path: '',
				component: BackOfficeHomeComponent
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
			}
		]
	 }
];

export const routing: ModuleWithProviders = RouterModule.forChild(officeRoutes);