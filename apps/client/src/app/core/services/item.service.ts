import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  currentList: string;

  constructor(private http: HttpClient) { }

  public addItem(list, data) {
    let call = this.http.post(`./api/obj/${list}`, data);
    return call;
  }

  public deleteItem(list, itemArray: Array<number>) {
    itemArray.forEach(item => {
      this.http.delete(`./api/obj/${list}/${item}`)
        .subscribe(result => console.log(result),
          err => console.log(err));
    });
  }

  public getList(list, expand?: boolean) {
    let params = new HttpParams().set('extend', String(expand));
    let opts = expand ? { params: params } : {};
    let call = this.http.get(`./api/obj/${list}`, opts);
    return call;
  }

  public getItem(list, id) {
    let api = (list === 'shared') ? `./api/mobile/${list}/${id}` : `./api/obj/${list}/${id}`;
    let call = this.http.get(api);
    return call;
  }

  public getMedia(media) {
    let call = this.http.get('./api/media', {
      params: { url: media }
    });
    return call;
  }

  public setList(current) {
    this.currentList = current;
  }

  public updateItem(list, id, data) {
    let call = this.http.put(`./api/obj/${list}/${id}`, data);
    return call;
  }
}
