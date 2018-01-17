import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Warehouse } from 'ngx-warehouse';
import { Observable } from 'rxjs';

import { SignupData } from './backand-types';

@Injectable()
export class BackandAuthService {
  redirectUrl: string;
  userId: number;

  constructor(private http: HttpClient/*private warehouse: Warehouse*/) { }

  public changePassword(oldPassword, newPassword) {

  }

  public currentUser() {
    // return this.warehouse.get('user')
  }

  public getAuthToken(user, pass) {
    let login = {
      username: user,
      password: pass
    }

    this.http.post(`${serverHost}api/auth/token`, login)
    .subscribe(res => { 
      console.log(res);
      this.useAnoymousAuth();
     },
    err => console.log(err));
  }

  public requestResetPassword(email) {

  }

  public signUp(userData: SignupData) {

  }

  public signout() {

  }

  public useAnoymousAuth() {
    let obj = {
      name: 'items'
    }

    this.http.get(`${serverHost}api/obj/list/125`, { params: obj })
      .subscribe(res => console.log(res),
      err => console.log(err))
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
