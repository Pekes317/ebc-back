import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { BackandHeader, BackandUrls } from './backand-types';

@Injectable()
export class BackandConfigService {
  apiUrl: string = 'https://api.backand.com';
  anonymousToken: string = 'your anonymousToken token';
  appName: string = 'ebc2';
  authStatus: string = '';
  authToken: BackandHeader;
  authType: string;
  is_auth_error: boolean = false;
  signUpToken: string = 'your signup token';
  urls: BackandUrls = {
    signup: '/1/user/signup',
    token: '/token',
    requestResetPassword: '/1/user/requestResetPassword',
    resetPassword: '/1/user/resetPassword',
    changePassword: '/1/user/changePassword',
    socialLoginWithCode: '/1/user/PROVIDER/code',
    socialSignupWithCode: '/1/user/PROVIDER/signupCode',
    socialLoginWithToken: '/1/user/PROVIDER/token'
  };
  username: string;

  constructor() {
    let storedToken = localStorage.getItem('auth_token');

    if (storedToken) {
      this.authToken = JSON.parse(storedToken);
      this.authType = this.authToken.header_name == 'Anonymous' ? 'Anonymous' : 'Token';
      this.authStatus = 'OK';
      if (this.authType == 'Token') {
        this.username = localStorage.getItem('username');
      }
    } else {
      this.authToken = { header_name: '', header_value: '' };
    }
  }

  public get authHeader() {
    var authHeader = new Headers();
    authHeader.append(this.authToken.header_name, this.authToken.header_value);
    return authHeader;
  }

  public extractErrorMessage(err) {
    return JSON.parse(err._body).error_description;
  }

  public getAuthType(): string {
    return this.authType;
  }

  public getAuthStatus(): string {
    return this.authStatus;
  }

  public getUsername(): string {
    return this.username;
  }

  public logError(err) {
    console.error('Error: ' + err);
  }
}
