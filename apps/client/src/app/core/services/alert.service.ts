import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { map, take } from '../../../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private http: HttpClient, private snack: MatSnackBar) {}
  
  public alertUser(message: { id: number, title: string, message: string }) {
    return this.http.post('/api/admin/devices', message).pipe(
      take(1)
    );
  }

  public checkUser(id: number) {
    return this.http.get(`/api/admin/devices/${id}`).pipe(
      map((devices: Array<any>) => (devices.length === 0)),
      take(1)
    );
  }

  public isAlert(message, action) {
    this.snack.open(message, action, {
      duration: 5000
    });
  }
}
