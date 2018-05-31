import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class TitleResolveService implements Resolve<any> {
	constructor(public router: Router, public title: Title) {

	}

	resolve(route: ActivatedRouteSnapshot) {
		let t = route.data
		this.title.setTitle(`EBC: App | ${t['title']}`);
		return t;
	}
}