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
    this.http.get(`./api/obj/${list}`)
      .subscribe(
      items => { console.log(items); return items },
      err => console.log(err));
  }

  public getItem(list, id) {

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
