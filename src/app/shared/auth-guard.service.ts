import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,
	RouterStateSnapshot } from '@angular/router';

import { BackandAuthService } from './backand-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private backAuth: BackandAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let storedToken = localStorage.getItem('auth_token');
    if (storedToken) { return true; }

    // Store the attempted URL for redirecting
    this.backAuth.redirectUrl = state.url;

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}