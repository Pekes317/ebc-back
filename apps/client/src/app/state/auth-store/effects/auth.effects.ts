import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { defer, Observable, of } from 'rxjs';
import { exhaustMap, map, tap } from 'rxjs/operators';

import { AuthActionTypes, Login, LoginSuccess, LoginFailure, Logout, LoginRedirect } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { Authenticate } from '../models/authenticate.model';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => of(null)).pipe(
    tap(() => this.authService.authCheck())
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.authService.login(auth)
        .then(() => new LoginSuccess())
        .catch(err => new LoginFailure(err)))
  )

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType<LoginFailure>(AuthActionTypes.LoginFailure),
    tap(() => this.authService.alert(false))
  )

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
    tap(() => {
      this.authService.alert(true);
      this.router.navigate(['/dashboard']);
    })
  )

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType<LoginRedirect>(AuthActionTypes.LoginRedirect),
    map(action => action.payload),
    tap(route => this.router.navigate([route]))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    map(() => this.authService.logout()
      .then(() => new LoginRedirect('/'))
      .catch(err => new LoginFailure(err)))
  )

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}
