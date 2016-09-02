import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class TitleResolve implements Resolve<ActivatedRouteSnapshot> {
	constructor(public router: Router) {

	}

	resolve(route: ActivatedRouteSnapshot) {
		let t = route.data
		
		return t;
	}
}