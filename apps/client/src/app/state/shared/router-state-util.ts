import { RouterStateSerializer } from '@ngrx/router-store';
import { Data, RouterStateSnapshot, Params } from '@angular/router';

export interface RouterStateUrl {
	data: Data;
  url: string;
  params: Params;
  queryParams: Params;
}

export class RouterStateUtil implements RouterStateSerializer<RouterStateUrl> {
	serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
		const { data, params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { data, url, params, queryParams };
  }
}
