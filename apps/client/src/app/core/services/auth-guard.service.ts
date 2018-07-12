import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromAuth from '../../state/auth-store/reducers';
import { LoginRedirect } from '../../state/auth-store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromAuth.State>) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getAuthStatus),
      map(authed => {
        if (!authed.loggedIn) {
          this.store.dispatch(new LoginRedirect('/user/login'));
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}