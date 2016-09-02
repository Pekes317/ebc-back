import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { BackComponent } from './back';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Home' } },
	{ path: 'back-office', component: BackComponent, data: { title: 'Back Office'} }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);