import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { TitleResolveService } from './core/services/title-resolve.service';

const routes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Electonic Business Card' }, resolve: { title: TitleResolveService } },
	{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
	{ path: 'user',  loadChildren: './auth/auth.module#AuthModule' },
	{ path: 'card/:id', component: EbcSvgComponent, data: { title: 'Card' }, resolve: { title: TitleResolveService } },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
