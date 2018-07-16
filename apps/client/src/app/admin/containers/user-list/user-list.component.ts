import { Component, OnInit } from '@angular/core';

import { adminNav } from '../../admin-nav';

@Component({
  selector: 'ebc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  nav = adminNav;
  
  constructor() { }

  ngOnInit() { }

}
