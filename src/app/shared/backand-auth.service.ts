import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignupData } from './backand-types';

@Injectable()
export class BackandAuthService {
  redirectUrl: string;
  userId: number;

  constructor(private http: HttpClient) { }

  public signUp(userData: SignupData) {
    userData.emailVerified = true;
    userData.disabled = false;
    userData.photoUrl = 'https://ebc.beezleeart.com/assets/img/user.svg';

    this.http.post('./api/auth/signup', userData)
     .subscribe(res => console.log(res));
  }
}
