import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BackandUser, SignupData } from './backand-types';

@Injectable()
export class BackandAuthService {
  authed: boolean = false;
  authUser: BackandUser;
  redirectUrl: string;
  userId: number;

  constructor(private http: HttpClient) { }

  public signUp(userData: SignupData) {
    userData.emailVerified = true;
    userData.disabled = false;
    userData.photoUrl = 'https://ebc.beezleeart.com/assets/img/user.svg';

    let call = this.http.post('./api/auth/signup', userData)
     .catch((err, caught) => { console.log(err); return caught});
     return call;
  }
}
