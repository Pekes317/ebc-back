import { Component, OnInit } from '@angular/core';
import { dashNav } from '../../dash-nav';

@Component({
  selector: 'ebc-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  nav = dashNav;
  
  constructor() { }

  ngOnInit() {
  }

}
