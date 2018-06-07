import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { User } from '../../../core/models/user.model';
import { DrawerNav } from '../../../core/models/drawer-nav.model';

@Component({
  selector: 'ebc-drawer-layout',
  templateUrl: './drawer-layout.component.html',
  styleUrls: ['./drawer-layout.component.scss']
})
export class DrawerLayoutComponent implements OnInit {
  @Input() ebcUser: User;
  @Input() ebcNodes: Array<DrawerNav>;

  currentPage: string;

  constructor(private myTitle: Title) { }

  ngOnInit() {
    this.currentPage = this.myTitle.getTitle();
   }

}
