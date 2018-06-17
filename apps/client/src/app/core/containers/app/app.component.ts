import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PrivatePolicyComponent } from '../../components/private-policy/private-policy.component';

@Component({
  selector: 'ebc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  copyright: number = 2016;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    let date = new Date();
    this.copyright = date.getFullYear();
  }

  showPolicy() {
    this.dialog.open(PrivatePolicyComponent);
  }
}
