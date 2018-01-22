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
    let back = 'https://api.backand.com/1/user/';

    let head = new HttpHeaders();
    head.append('Authorization', `Bearer ${email.access_token}`);

    this.http.get(back, { headers: head })
    .subscribe(res => { 
      console.log(res);
     },
    err => console.log(err));

  }

  public signUp(userData: SignupData) {

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
