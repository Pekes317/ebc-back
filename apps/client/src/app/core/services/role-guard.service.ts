import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private snack: MatSnackBar) { }

  canActivate(): Promise<boolean> | boolean {
    // if(ebcRole === 'Admin' || ebcRole === 'Member') {
    //   return true;
    // }

    this.snack.open('Access Denied Incorrect Role', 'Try Again');
    return false;
  }
}
