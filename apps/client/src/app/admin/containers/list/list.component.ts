import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { adminNav } from '../../admin-nav';

@Component({
  selector: 'ebc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  nav = adminNav;
  title: string = '';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(table => this.title = table.collect);
  }

}
