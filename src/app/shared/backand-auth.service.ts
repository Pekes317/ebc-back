import { Injectable } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { Warehouse } from 'ngx-warehouse';
import { Observable } from 'rxjs';

import { SignupData } from './backand-types';

@Injectable()
export class BackandAuthService {
  redirectUrl: string;
  userId: number;

  constructor(private backand: BackandService, private warehouse: Warehouse) { }

  public changePassword(oldPassword, newPassword) {
    return this.backand.changePassword(oldPassword, newPassword)
      .catch(err => {
        console.log(err);
      });
  }

  public currentUser() {
    return this.warehouse.get('user')
  }

  public getAuthToken(username, password) {
    return this.backand.signin(username, password)
      .then(auth => {
        ebcAuth = true;
        this.storeAuth(ebcAuth);
        this.storeRole(auth['data']);
      })
      .catch(err => {
        ebcAuth = false;
        this.storeAuth(ebcAuth);
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

  private storeAuth(status: boolean) {
    this.warehouse.set('auth', status);
  }

  private storeRole(authData) {
    ebcRole = authData['role'];
    this.storeUser(authData['userId']);
    this.warehouse.set('userRole', ebcRole);
  }

   private storeUser(userId) {
    this.backand.object.getOne('users', userId)
      .then(user => {
        this.warehouse.set('user', user['data']);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
