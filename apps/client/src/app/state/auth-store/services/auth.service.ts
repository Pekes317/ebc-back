import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { take } from 'rxjs/operators';
import { of } from 'rxjs';

import { Authenticate } from '../models/authenticate.model';
import { LoadAuth, Logout } from '../actions/auth.actions';
import { User } from '../../../core/models/user.model';
import { UserState } from '../models/user-state.model';
import * as fromAuth from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authStatus: boolean = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private snack: MatSnackBar,
    private store: Store<fromAuth.State>
  ) {}

  public alert(ebcAuth) {
    let message;
    let action;

    if (ebcAuth) {
      message = 'Login Successful';
      action = 'Okay';
    }
    if (!ebcAuth) {
      message = 'Login Failed';
      action = 'Try Again';
    }
    this.snack.open(message, action, {
      duration: 5000
    });
  }

  public authCheck() {
    return this.fireAuth.idTokenResult.subscribe(results => {
      if (results) {
        let user = results.claims;
        let current: User = {
          email: user.email,
          displayName: user.name,
          photoUrl: user.picture
        };
        let status: UserState = {
          loggedIn: true,
          role: user.role,
          token: results.token
        };
        this.store.dispatch(new LoadAuth({ user: current, userState: status }));
        return of(results);
      }
      this.isLogout()
      return of(false);
    });
  }

  public login({ username, password }: Authenticate) {
    return this.fireAuth.auth.signInWithEmailAndPassword(username, password);
  }

  public logout() {
    return this.fireAuth.auth.signOut();
  }

  private isLogout() {
    this.store
      .pipe(
        select(fromAuth.getAuthStatus),
        take(1)
      )
      .subscribe(status => {
        if (status.loggedIn) {
          this.store.dispatch(new Logout());
        }
      });
  }
}
