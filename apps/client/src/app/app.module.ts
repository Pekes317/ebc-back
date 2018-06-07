import { isPlatformBrowser } from '@angular/common';
import { ModuleWithProviders, NgModule, PLATFORM_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { FileManagerModule, FileManagerApiService, FileManagerBackendApiService } from '@beezleeart/ngx-filemanager';
import { TreeModule } from '@beezleeart/ngx-tree';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment'; 
import { fileManagerConfig } from './config/filemanager.config';
import { firebase } from './config/firebase.config';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ConfirmationPopoverModule.forRoot(),
    CoreModule,
    EffectsModule.forRoot([]),
    FileManagerModule.forRoot(fileManagerConfig, { provide: FileManagerApiService, useClass: FileManagerBackendApiService }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    SharedModule,
    StoreModule.forRoot({}),
    TreeModule.forRoot(),
    TranslateModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public static forServer(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        CoreModule.universalInterceptor
      ]
    }
  }
 }
