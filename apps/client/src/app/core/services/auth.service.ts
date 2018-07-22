import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from '../models/user.model';
import { UserSignup } from '../models/user-signup.model';
import { UserRole } from '../../state/user-store/models/user-role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authed: boolean = false;
  authUser: User;
  baseUrl: string = 'https://ebc.beezleeart.com';
  redirectUrl: string;
  token: string = '';
  userId: number;

  constructor(private http: HttpClient) {}

  public getUsers(next?: string) {
    const nextParam = new HttpParams().set('next', next);
    let call = next ? this.http.get('/api/auth/users', { params: nextParam }) : this.http.get('/api/auth/users');
    return call;
  }

  public signUp(userData: UserSignup) {
    userData.emailVerified = true;
    userData.disabled = false;
    userData.photoUrl = `${this.baseUrl}/assets/img/user.svg`;
    let call = this.http.post('/api/auth/signup', userData);
    return call;
  }

  public updateRole(userRole: UserRole) {
    let call = this.http.post('/api/auth/role', userRole);
    return call;
  }
}
