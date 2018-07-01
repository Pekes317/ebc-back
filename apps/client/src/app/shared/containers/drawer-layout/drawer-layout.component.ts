import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { User } from '../../../core/models/user.model';
import { DrawerNav } from '../../../core/models/drawer-nav.model';
import * as fromAuth from '../../../state/auth-store/reducers';

@Component({
  selector: 'ebc-drawer-layout',
  templateUrl: './drawer-layout.component.html',
  styleUrls: ['./drawer-layout.component.scss']
})
export class DrawerLayoutComponent implements OnInit {

  @Input() currentPage: string = 'EBC: The App';
  @Input() ebcNodes: Array<DrawerNav>;

  ebcRole: string;
  ebcUser: User;

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.store.pipe(
      select(fromAuth.getAuthUser),
      take(1)
    ).subscribe(user => this.ebcUser = user);
    this.store.pipe(
      select(fromAuth.getAuthStatus),
      take(1)
    ).subscribe(auth => this.ebcRole = auth.role);
  }
}