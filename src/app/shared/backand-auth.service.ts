import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignupData } from './backand-types';

@Injectable()
export class BackandAuthService {
  redirectUrl: string;
  userId: number;

  constructor(private http: HttpClient) { }

  public changePassword(oldPassword, newPassword) {

  }

  public currentUser() {
   
  }

  public getAuthToken(user, pass) {
    let login = {
      username: user,
      password: pass
    }

    this.http.post(`./api/auth/token`, login)
    .subscribe(res => { 
      console.log(res);
      this.requestResetPassword(res);
     },
    err => console.log(err));
  }

  public requestResetPassword(email) {
    
  }

  public signUp(userData: SignupData) {
    userData.emailVerified = true;
    userData.disabled = false;
    userData.photoUrl = 'https://ebc.beezleeart.com/assets/img/user.svg';

    this.http.post('./api/auth/signup', userData)
     .subscribe(res => console.log(res));
  }

  public signout() {

  }

  public useAnoymousAuth() {

  }

  private storeAuth(status: boolean) {

  }

  private storeRole(authData) {
    ebcRole = authData['role'];
    this.storeUser(authData['userId']);
  }

  private storeUser(userId) {

  }
}
