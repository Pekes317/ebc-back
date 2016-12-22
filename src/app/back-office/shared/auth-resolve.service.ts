import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthResolve implements Resolve<any> {
  constructor(public http: Http, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
     this.http.get('http://admin:yield63EBC**@ebc.beezleeart.com/assets/file/').subscribe(
      data => console.log('Success', data),
      err => console.log('Fail', err)
    );
    return true;
  }
}
