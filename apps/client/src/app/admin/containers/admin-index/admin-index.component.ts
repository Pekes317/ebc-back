import { Component, OnInit } from '@angular/core';

import { adminNav } from '../../admin-nav';

@Component({
  selector: 'ebc-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent implements OnInit {
  nav = adminNav;

  constructor() { }

  ngOnInit() {
  }

}
