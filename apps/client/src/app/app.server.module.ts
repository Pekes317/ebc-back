import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './core/app-shell/app-shell.component';

const routes: Routes = [ { path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule.forServer(),
    ModuleMapLoaderModule,
    ServerModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule { }