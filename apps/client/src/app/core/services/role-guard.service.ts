import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromAuth from '../../state/auth-store/reducers';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private snack: MatSnackBar, private store: Store<fromAuth.State>) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getAuthStatus),
      map(authed => {
        if (authed.role !== 'user') {
          this.snack.open('Access Denied Incorrect Role', 'Try Again');
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
