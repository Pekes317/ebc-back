import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './core/containers/index/index.component';
import { ItemDetailComponent } from './core/containers/item-detail/item-detail.component';

const routes: Routes = [
	{ path: '', component: IndexComponent, data: { title: 'Electonic Business Card' } },
	{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
	{ path: 'user',  loadChildren: './auth/auth.module#AuthModule' },
	{ path: 'card/:id', component: ItemDetailComponent, data: { title: 'Card' } },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
