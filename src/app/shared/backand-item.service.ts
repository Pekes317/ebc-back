import { Injectable } from '@angular/core';
// import { Warehouse } from 'ngx-warehouse'; 

@Injectable()
export class BackandItemService {
  currentList: string;

constructor(/*public warehouse: Warehouse*/) { }

  public addItem(list, data) {
    
  }

  public deleteItem(list, itemArray) {
    let delList = [];
    let urlBase = `/items`;
    itemArray.forEach(id => {
      let item = {
        method: 'DELETE',
        url: `${urlBase}/${id}`
      };
      delList.push(item);
    });
  }

  public getList(list) {
  
  }

  public getItem(list, id) {
   
  }

  setList(current) {
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
