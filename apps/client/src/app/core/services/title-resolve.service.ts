import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleResolveService implements Resolve<any> {
	constructor(public router: Router, public title: Title) {

	}

	resolve(route: ActivatedRouteSnapshot) {
		let data = route.data
		this.title.setTitle(`EBC: App | ${data.title}`);
		return data;
	}
}