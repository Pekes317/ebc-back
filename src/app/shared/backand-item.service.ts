import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackandService } from '@backand/angular2-sdk';

@Injectable()
export class BackandItemService {

  constructor(public backand: BackandService) { }

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
    console.log(delList);
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

  public updateItem(list, id, data) {
    return this.backand.object.update(list, id, data)
      .catch(err => {
        console.log(err);
      });
  }
}
