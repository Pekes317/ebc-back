import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackandItemService {
  currentList: string;

  constructor(private http: HttpClient) { }

  public addItem(list, data) {

  }

  public deleteItem(list, itemArray) {

  }

  public getList(list) {
    let call = this.http.get(`./api/obj/${list}`);
    call.catch((err, caught) => { console.log(err); return caught });
    return call;
  }

  public getItem(list, id) {
    let api = (list === 'shared') ? `./api/mobile/${list}/${id}`: `./api/obj/${list}/${id}`;
    let call = this.http.get(api);
    call.catch((err, caught) => { console.log(err); return caught });
    return call;
  }

  public setList(current) {
    this.currentList = current;
  }

  public itemListener() {

  }

  public updateItem(list, id, data) {

  }

  private rebuildList(listArr: Array<any>, list) {
    let items: Array<any> = [];

    listArr.forEach(res => {
      let obj = {};

      res.forEach(i => {
        obj[i.Key] = i.Value;
      })
      items.push(obj);
    });
    console.log(items);
    // this.warehouse.set(list, items);
  }
}
