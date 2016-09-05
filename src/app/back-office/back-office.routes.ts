import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, TitleResolve } from '../shared';
import { BackOfficeComponent } from './back-office.component';

const officeRoutes: Routes = [
	{
		path: 'back-office',
		component: BackOfficeComponent,
		canActivate: [AuthGuard],
		data: { title: 'Back Office' },
		resolve: { title: TitleResolve }
	 }
];

export const routing: ModuleWithProviders = RouterModule.forChild(officeRoutes);