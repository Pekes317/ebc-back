import { Injectable } from '@angular/core';
import { CanActivate, Resolve } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromAuth from '../../state/auth-store/reducers';
import * as fromRoot from '../../state/reducers';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  routeData;
  
  constructor(private snack: MatSnackBar, private rootStore: Store<fromRoot.State>, private store: Store<fromAuth.State>) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getAuthStatus),
      map(authed => {
        this.checkRoles();
        let roles = this.routeData.roles;
        if (roles.includes(authed.role)) {
          return true;
        }

        this.snack.open('Access Denied, Missing Proper Permissions', 'Try Again');
        return false;
      }),
      take(1)
    );
  }

  checkRoles() {
    this.rootStore.pipe(
      select(fromRoot.getRouterState),
      take(1)
    ).subscribe(roles => {
      this.routeData = roles.data;
    });
  }
}
