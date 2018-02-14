import { Component, OnInit } from '@angular/core';

import { BackandUser } from '../shared';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {
  backUser: BackandUser;

  constructor() { }

  ngOnInit() {
    this.backUser = JSON.parse(localStorage.getItem('ebcUser'));
  }
}
