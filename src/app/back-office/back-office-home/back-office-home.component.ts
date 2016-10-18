import { Component, OnInit } from '@angular/core';

import { BackandItemService } from '../../shared/backand-item.service';
import { BackandUser } from '../../shared/backand-types';

@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit {
  users: BackandUser;

  constructor(private backand: BackandItemService) { }

  ngOnInit() {
  }

  getUsers(){

  }

}
