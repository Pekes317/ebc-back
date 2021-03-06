import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import 'rxjs/add/operator/do';

import { RouterState } from '../shared/router-state-util';

@Injectable()
export class RouteEffects {

  @Effect({ dispatch: false })
  updateTitle$ = this.actions$
    .ofType(ROUTER_NAVIGATION)
    .do((action: RouterNavigationAction<RouterState>) => {
      this.titleService.setTitle(`EBC: App | ${action.payload.routerState.data.title}`);
    });

    constructor(private actions$: Actions, private titleService: Title) { }
}

