import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { UserSignup } from '../models/user-signup.model';

@Injectable({
  providedIn: 'root'
})
export class BackandAuthService {
  authed: boolean = false;
  authUser: User;
  redirectUrl: string;
  token: string = '';
  userId: number;

  constructor(private http: HttpClient) { }

  public signUp(userData: UserSignup) {
    userData.emailVerified = true;
    userData.disabled = false;
    userData.photoUrl = 'https://ebc.beezleeart.com/assets/img/user.svg';

    let call = this.http.post('./api/auth/signup', userData)
     return call;
  }
}
