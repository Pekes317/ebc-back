import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Logout } from '../../../state/auth-store/actions/auth.actions';
import { UserState } from '../../../state/auth-store/models/user-state.model';
import * as fromAuth from '../../../state/auth-store/reducers';

@Component({
  selector: 'ebc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  auth: boolean = false;

  constructor(private store: Store<fromAuth.State>, private router: Router) { }

  ngOnInit() {
    let auth$: Observable<UserState> = this.store.pipe(select(fromAuth.getAuthStatus));
      auth$.subscribe(
      status => this.auth = status.loggedIn);
   }

  toHome() {
    this.store.dispatch(new Logout());
  }

  toMain() {
    let path:Array<string> = this.auth ? ['dashboard'] : ['user','login'];
    this.router.navigate(path);
  }

  toCreate() {
    this.router.navigate(['user', 'signup']);
  }
}