import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleResolve } from './app.title.resolve';
import { HomeComponent } from './home';

const appRoutes: Routes = [
	{
		path: '', component: HomeComponent, data: { title: 'Home' }, resolve: {
			title: TitleResolve
		}
	}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);