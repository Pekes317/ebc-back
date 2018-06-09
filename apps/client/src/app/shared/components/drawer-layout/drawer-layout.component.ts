import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../core/models/user.model';
import { DrawerNav } from '../../../core/models/drawer-nav.model';

@Component({
  selector: 'ebc-drawer-layout',
  templateUrl: './drawer-layout.component.html',
  styleUrls: ['./drawer-layout.component.scss']
})
export class DrawerLayoutComponent implements OnInit {
  
  @Input() currentPage: string = 'EBC: The App';
  @Input() ebcUser: User;
  @Input() ebcNodes: Array<DrawerNav>;

  constructor() { }

  ngOnInit() { }

}
