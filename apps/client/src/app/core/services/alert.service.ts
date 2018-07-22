import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snack: MatSnackBar) { }

  public isAlert(message, action) {
    this.snack.open(message, action, {
      duration: 5000
    });
  }
}
