import { Injectable } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { Warehouse } from 'ngx-warehouse'; 

@Injectable()
export class BackandItemService {

  constructor(public backand: BackandService, public warehouse: Warehouse) { }

  public addItem(list, data) {
    return this.backand.object.create(list, data)
      .catch(err => {
        console.log(err);
      });
  }

  public deleteItem(list, itemArray) {
    let delList = [];
    let urlBase = `${this.backand.defaults.apiUrl}/${this.backand.constants.URLS.objects}/items`;
    itemArray.forEach(id => {
      let item = {
        method: 'DELETE',
        url: `${urlBase}/${id}`
      };
      delList.push(item);
    });
    return this.backand.bulk.general(delList)
      .catch(err => {
        console.log(err);
      });
  }

  public getList(list) {
    return this.backand.object.getList(list)
      .catch(err => {
        console.log(err);
      });
  }

  public getItem(list, id) {
    return this.backand.object.getOne(list, id)
      .catch(err => {
        console.log(err);
      });
  }

  public itemListener() {
    this.backand.on('ebcList_updated', data => {
      let items = data[1]['Value'];
      this.rebuildList(items, 'items');
    });
  }

  public updateItem(list, id, data) {
    return this.backand.object.update(list, id, data)
      .catch(err => {
        console.log(err);
      });
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
    this.warehouse.set(list, items);
  }
}
