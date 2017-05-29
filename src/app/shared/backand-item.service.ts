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

  public deleteItem(list, id) {
    return this.backand.object.remove(list, id)
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
    return this.backand.object.getItem(list, id)
      .catch(err => {
        console.log(err);
      });
  }

  public updateItem(list, id, data) {
    return this.backand.object.updateItem(list, id, data)
      .catch(err => {
        console.log(err);
      });
  }
}
