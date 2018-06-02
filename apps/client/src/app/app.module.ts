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
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FileManagerModule, FileManagerApiService, FileManagerBackendApiService } from '@beezleeart/ngx-filemanager';
import { FileModel } from '@beezleeart/ngx-filemanager/lib/filesList/file.model';
import { TreeModule } from '@beezleeart/ngx-tree';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackOfficeModule } from './back-office/back-office.module';
import { CoreModule } from './core/core.module';
import { SvgComponent } from './svg/svg.component';
import { environment } from '../environments/environment'; 
import { FilesModule } from './files/files.module';
import { FolderModule } from './folder/folder.module';
import { fileManagerConfig } from './config/filemanager.config';
import { firebase } from './config/firebase.config';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BackOfficeModule,
    ConfirmationPopoverModule.forRoot(),
    CoreModule,
    EffectsModule.forRoot([]),
    FileManagerModule.forRoot(fileManagerConfig, { provide: FileManagerApiService, useClass: FileManagerBackendApiService }),
    FilesModule,
    FolderModule,
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
    AppComponent,
    HomeComponent,
    SvgComponent
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
