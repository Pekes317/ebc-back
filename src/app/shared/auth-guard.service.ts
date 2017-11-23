import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Warehouse } from 'ngx-warehouse';

import { BackandAuthService } from './backand-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private backAuth: BackandAuthService, private router: Router, private warehouse: Warehouse) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let storedToken = ebcAuth;
    
    // Store the attempted URL for redirecting
    this.backAuth.redirectUrl = state.url;
    
    if (storedToken) { return true; }

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}