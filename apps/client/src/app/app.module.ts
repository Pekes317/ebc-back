import { ModuleWithProviders, NgModule, DoCheck } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { FileManagerModule, FileManagerApiService, FileManagerBackendApiService } from '@beezleeart/ngx-filemanager';
import { TreeModule } from '@beezleeart/ngx-tree';
import { NxModule } from '@nrwl/nx';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment'; 
import { fileManagerConfig } from './config/filemanager.config';
import { firebase } from './config/firebase.config';
import { StateModule } from './state/state.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ConfirmationPopoverModule.forRoot(),
    CoreModule.forRoot(),
    FileManagerModule.forRoot(fileManagerConfig, { provide: FileManagerApiService, useClass: FileManagerBackendApiService }),
    FormsModule,
    NxModule.forRoot(),
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    StateModule.forRoot(),
    TreeModule.forRoot(),
    TranslateModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements DoCheck {
   
  constructor(private fireAuth: AngularFireAuth) { }

  ngDoCheck() {
    let token = this.fireAuth.auth.currentUser ? this.fireAuth.auth.currentUser['qa'] : undefined;
    fileManagerConfig.authToken = token;
  }

  public static forServer(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        CoreModule.universalInterceptor
      ]
    }
  }
 }
