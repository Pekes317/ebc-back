import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BackandConfigService } from './backand-config.service';

@Injectable()
export class BackandItemService {
  baseUrl: string = `${this.config.apiUrl}/1/objects`;

  constructor(public config: BackandConfigService, public http: Http) { }

  public addItem(list, data) {
    let url = `${this.baseUrl}/${list}`;
    let update = JSON.stringify(data);

    let $obs = this.http.post(url, update, {
      headers: this.config.authHeader
   }).map(res => res.json());

    $obs.subscribe(
      data => console.log(data),
      err => this.config.errorHander(err),
      () => console.log('Items')
    )

    return $obs;
  }

  public deleteItem(list, id) {
    let url = `${this.baseUrl}/${list}/${id}`;

    let $obs = this.http.delete(url, {
      headers: this.config.authHeader
    }).map(res => res.json());

    $obs.subscribe(
      data => console.log(data),
      err => this.config.errorHander(err),
      () => console.log('Items')
    )

    return $obs;
  }

  public getList(list) {
    let url = `${this.baseUrl}/${list}`;

    let $obs = this.http.get(url, {
      headers: this.config.authHeader
    })
    .map(res => res.json());

    $obs.subscribe(
      data => console.log(data),
      err => this.config.errorHander(err),
      () => console.log('Items')
    )

    return $obs;
  }

  public getItem(list, id) {
    let url = `${this.baseUrl}/${list}/${id}`;

    let $obs = this.http.get(url, {
      headers: this.config.authHeader
   }).map(res => res.json());

    $obs.subscribe(
      data => console.log(data),
      err => this.config.errorHander(err),
      () => console.log('Items')
    );

    return $obs;
  }

  public updateItem(list, id, data) {
    let url = `${this.baseUrl}/${list}/${id}`;
    let update = JSON.stringify(data);

    let $obs = this.http.put(url, update, {
      headers: this.config.authHeader
    }).map(res => res);
    
    $obs.subscribe(
      data => console.log(data),
      err => this.config.errorHander(err),
      () => console.log('Items')
    )

    return $obs;
  }
}
