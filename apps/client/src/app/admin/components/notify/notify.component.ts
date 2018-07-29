import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AlertService } from '../../../core/services/alert.service';
import { Item } from '../../../state/item-store/models/item.model';

@Component({
  selector: 'ebc-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  messageField: FormControl = new FormControl('', Validators.required);
  noAlert: boolean = true;
  notifyForm: FormGroup;
  titleField: FormControl = new FormControl('', Validators.required);

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Item,
    private alert: AlertService,
    private dialog: MatDialogRef<NotifyComponent>
  ) {}

  ngOnInit() {
    this.notifyForm = new FormGroup({
      title: this.titleField,
      message: this.messageField
    });
    this.alert
      .checkUser(this.item.user.id)
      .subscribe(avail => (this.noAlert = avail));
  }

  cancel() {
    this.dialog.close();
  }

  notify() {
    let message = {
      id: this.item.user.id,
      title: this.titleField.value,
      message: this.messageField.value
    };
    this.alert.alertUser(message).subscribe(
      () => {
        this.successNotify(true);
        this.dialog.close();
      },
      err => {
        console.log(err);
        this.successNotify(false);
        this.dialog.close();
      }
    );
  }

  successNotify(sucess: boolean) {
    let action = sucess ? 'Okay' : 'Try Again';
    let message = sucess
      ? `Nofication to ${this.item.user.email} was Sent`
      : `Nofication to ${this.item.user.email} has Failed`;
    this.alert.isAlert(message, action);
  }
}
