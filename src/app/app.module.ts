import { isPlatformBrowser } from '@angular/common';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FileManagerModule, FileManagerApiService, FileManagerBackendApiService } from '@beezleeart/ngx-filemanager';
import { TreeModule } from '@beezleeart/ngx-tree';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as io from 'socket.io-client';
// window['io'] = io;

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { AuthInterceptor } from './shared/auth.interceptor';
import { BackOfficeModule } from './back-office/back-office.module';
import { BackandAuthService } from './shared/backand-auth.service';
import { BackandItemService } from './shared/backand-item.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { EbcMaterialModule } from './ebc-material/ebc-material.module';
import { FilesModule } from './files/files.module';
import { FolderModule } from './folder/folder.module';
import { fileManagerConfig } from './shared/filemanager.config';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarModule } from './navbar/navbar.module';
import { EbcSvgComponent } from './ebc-svg/ebc-svg.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { EbcResetComponent } from './ebc-reset/ebc-reset.component';
import { FileModel } from '@beezleeart/ngx-filemanager/lib/filesList/file.model';

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
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BackOfficeModule,
    ConfirmationPopoverModule.forRoot(),
    EbcMaterialModule,
    EffectsModule.forRoot([]),
    FileManagerModule.forRoot(fileManagerConfig, { provide: FileManagerApiService, useClass: FileManagerBackendApiService }),
    FilesModule,
    FolderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    NavbarModule,
    routing,
    StoreModule.forRoot({}),
    TreeModule.forRoot(),
    TranslateModule.forRoot()
  ],
  declarations: [
    AppComponent,
    CreateUserComponent,
    HomeComponent,
    LoginComponent,
    EbcSvgComponent,
    PrivatePolicyComponent,
    EbcResetComponent
  ],
  providers: [
    appRoutingProviders,
    BackandAuthService,
    BackandItemService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    PrivatePolicyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(private translate: TranslateService) {
    this.setTranslationForEN();
    this.translate.use('en');
  }

  private setTranslationForEN(): void {
    this.translate.setTranslation('en', {
      RI_TREE_LBL_ADD_NODE: 'Add data',
      RI_TREE_LBL_EDIT_NODE: 'Edit data',
      RI_TREE_LBL_REMOVE_NODE: 'Delete data',
      RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level',
      RI_FM_BTN_LANDSCAPE: 'Landscape',
      RI_FM_BTN_PORTRAIT: 'Portrait',
      RI_FM_BTN_SQUARE: 'Square',
      RI_FM_BTN_SAVE: 'Save',
      RI_FM_LBL_CHOOSE_SELECTION: 'Choose selection',
      RI_FM_LBL_DELETE_SELECTION: 'Delete selection',
      RI_FM_LBL_INVERSE_SELECTION: 'Inverse selection',
      RI_FM_LBL_SEARCH_FOR: 'Search for...',
      RI_FM_LBL_SELECT_ALL: 'Select all',
      RI_FM_LBL_UNSELECT_ALL: 'Unselect all',
    });
  }
}
