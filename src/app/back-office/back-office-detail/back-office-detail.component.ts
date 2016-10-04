import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandItem } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-detail',
  templateUrl: './back-office-detail.component.html',
  styleUrls: ['./back-office-detail.component.scss']
})
export class BackOfficeDetailComponent implements OnInit {
  itemId: number;
  table: string;

  constructor(private backand: BackandItemService, private dialog: MdDialogRef<any>) { }

  ngOnInit() {
  }

  cancel() {
   this.dialog.close();
  }
}
