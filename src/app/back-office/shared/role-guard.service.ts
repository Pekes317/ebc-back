import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private snack: MdSnackBar) { }

  canActivate(): Promise<boolean> | boolean {
    let user = JSON.parse(localStorage.getItem('tokenData'));
    if(user['role'] === 'Admin' || user['role'] === 'Member') {
      return true;
    }

    this.snack.open('Access Denied Incorrect Role', 'Try Again');
    return false;
  }
}
