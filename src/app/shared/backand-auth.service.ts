import { Injectable } from '@angular/core';
// import { Warehouse } from 'ngx-warehouse';
import { Observable } from 'rxjs';

import { SignupData } from './backand-types';

@Injectable()
export class BackandAuthService {
  redirectUrl: string;
  userId: number;

  constructor(/*private warehouse: Warehouse*/) { }

  public changePassword(oldPassword, newPassword) {
   
  }

  public currentUser() {
    // return this.warehouse.get('user')
  }

  public getAuthToken(username, password) {
   
  }

  public requestResetPassword(email) {
   
  }

  public signUp(userData: SignupData) {
  
  }

  public signout() {
  
  }

  public useAnoymousAuth() {
  
  }

  private storeAuth(status: boolean) {
    // this.warehouse.set('auth', status);
  }

  private storeRole(authData) {
    ebcRole = authData['role'];
    this.storeUser(authData['userId']);
    // this.warehouse.set('userRole', ebcRole);
  }

   private storeUser(userId) {
    
  }
}
