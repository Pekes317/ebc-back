import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleResolve } from '../app.title.resolve';
import { BackOfficeComponent } from './back-office.component';

const officeRoutes: Routes = [
	{
		path: 'back-office', component: BackOfficeComponent, data: { title: 'Back Office' }, resolve: {
			title: TitleResolve
		}
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(officeRoutes);