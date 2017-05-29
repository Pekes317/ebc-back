import { Injectable } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { Observable } from 'rxjs';

import { SignupData } from './backand-types';

@Injectable()
export class BackandAuthService {
  redirectUrl: string;

  constructor(private backand: BackandService) { }

  public changePassword(oldPassword, newPassword) {
    return this.backand.changePassword(oldPassword, newPassword)
      .catch(err => {
        console.log(err);
      });
  }

  public currentUser() {
    return this.backand.user.getUserDetails()
      .catch(err => {
        console.log(err);
      });
  }

  public getAuthToken(username, password) {
    return this.backand.signin(username, password)
      .catch(err => {
        console.log(err);
      });
  }

  public requestResetPassword(email) {
    return this.backand.requestResetPassword(email)
      .catch(err => {
        console.log(err);
      });
  }

  public signUp(userData: SignupData) {
    return this.backand.signup(userData.firstName, userData.lastName, userData.email, userData.password, userData.confirmPassword)
      .catch(err => {
        console.log(err);
      });
  }

  public signout() {
    return this.backand.signout()
      .catch(err => {
        console.log(err);
      });
  }

  public useAnoymousAuth() {
    this.backand.useAnonymousAuth()
      .catch(err => {
        console.log(err);
      });
  }
}
