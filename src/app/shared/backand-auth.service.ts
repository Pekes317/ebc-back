import 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { BackandConfigService } from './backand-config.service';

@Injectable()
export class BackandAuthService {

  constructor(private config: BackandConfigService, private http: Http) { }

  public changePassword(oldPassword, newPassword) {
    let url = this.config.apiUrl + this.config.urls.changePassword;
    let creds = JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword
    });

    var $obs = this.http.post(url, creds, {
      headers: this.config.authHeader
    }).map(res => res);

    $obs.subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Finish Change Password'));

    return $obs;
  }

  public clearAuthToken() {
    this.config.authToken = { header_name: '', header_value: '' };
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
  }

  public currentUser() {
    const userQuery = `${this.config.apiUrl}/1/query/data/CurrentUser`;
    return this.http.get(userQuery, {
      headers: this.config.authHeader
    }).map(res => res.json());
  }

  public getAuthToken(username, password) {
    let creds = `username=${username}` +
      `&password=${password}` +
      `&appName=${this.config.appName}` +
      `&grant_type=password`;
    let url = this.config.apiUrl + this.config.urls.token;
    let header = new Headers();

    header.append('Content-Type', 'application/x-www-form-urlencoded');
    
    var $obs = this.http.post(url, creds, {
      headers: header
    }).map(res => this.getToken(res));

    $obs.subscribe(
      data => {
        this.setTokenHeader(data)
        localStorage.setItem('username', username);
      },
      err => {
        console.log(err);
      },
      () => console.log('Finish Auth'));

    return $obs;
  }

  public requestResetPassword(email) {
    let url = this.config.apiUrl + this.config.urls.requestResetPassword;
    let creds = JSON.stringify({
      email: email,
      appName: this.config.appName
    });
    let header = new Headers();
    header.append('SignUpToken', this.config.signUpToken);
    
    var $obs = this.http.post(url, creds, {
        headers: header
      }).map(res => res);

    $obs.subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Finish Request Reset Password'));

    return $obs;
  }

  public signUp(data) {
    let url = this.config.apiUrl + this.config.urls.signup;
    let creds = JSON.stringify(data);
    let header = new Headers();
    header.append('SignUpToken', this.config.signUpToken);
    
    var $obs = this.http.post(url, creds, {
      headers: header
    });

    $obs.subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Finish Sign Up'));

    return $obs;
  }

  public useAnoymousAuth() {
    this.setAnonymousHeader();
  }

  private getToken(res) {
    console.log(res);
    return res.json().access_token;
  }

  private setAnonymousHeader() {
    this.config.authStatus = "OK";
    this.config.authToken.header_name = "AnonymousToken";
    this.config.authToken.header_value = this.config.anonymousToken;
    this.storeAuthToken(this.config.authToken);
    localStorage.setItem('username', 'Anonymous');
  }

  private setTokenHeader(jwt) {
    if (jwt) {
      this.config.authToken.header_name = "Authorization";
      this.config.authToken.header_value = "Bearer " + jwt;
      this.storeAuthToken(this.config.authToken);
    }
  }

  private storeAuthToken(token) {
    localStorage.setItem('auth_token', JSON.stringify(token));
  }
}
