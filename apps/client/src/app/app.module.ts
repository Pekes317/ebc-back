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
import { CreateUserComponent } from './create-user/create-user.component';
import { EbcMaterialModule } from './ebc-material/ebc-material.module';
import { FilesModule } from './files/files.module';
import { FolderModule } from './folder/folder.module';
import { fileManagerConfig } from './shared/filemanager.config';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';
import { environment } from '../environments/environment'; 

const firebase = {
  apiKey: 'AIzaSyB7VP6_qE1OOxvpR5Edci8nra_uMjEywwU',
  authDomain: 'ebc2-549f1.firebaseapp.com',
  databaseURL: 'https://ebc2-549f1.firebaseio.com',
  projectId: 'ebc2-549f1',
  storageBucket: 'ebc2-549f1.appspot.com',
  messagingSenderId: '708554060424'
}

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AppRoutingModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BackOfficeModule,
    ConfirmationPopoverModule.forRoot(),
    CoreModule,
    EbcMaterialModule,
    EffectsModule.forRoot([]),
    FileManagerModule.forRoot(fileManagerConfig, { provide: FileManagerApiService, useClass: FileManagerBackendApiService }),
    FilesModule,
    FolderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot({}),
    TreeModule.forRoot(),
    TranslateModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  declarations: [
    AppComponent,
    CreateUserComponent,
    HomeComponent,
    LoginComponent,
    EbcSvgComponent,
    EbcResetComponent
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
