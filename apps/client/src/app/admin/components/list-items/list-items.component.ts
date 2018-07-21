import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material';
import { auth } from 'firebase-admin';

@Component({
  selector: 'ebc-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input()
  set registered(value: Array<auth.UserRecord>) {
    this.fullList = value;
    this.pageList(5);
  }
  @Output() getNext: EventEmitter<boolean> = new EventEmitter();
  
  fullList: Array<auth.UserRecord> = [];
  newRole: string = '';
  roles: Array<string> = ['Admin', 'Owner', 'Member', 'User'];
  users: Array<auth.UserRecord> = [];

  constructor() {}

  ngOnInit() {
    this.paginator.page.subscribe(page => {
      let start = page.pageIndex * page.pageSize;
      let next = start + page.pageSize;
      this.pageList(next, start);
      if (!this.paginator.hasNextPage()) {
        this.getNext.next(true);
      }
    });
  }

  editUser(user) {
    let updateRole = {
      uid: user.uid,
      role: this.newRole
    };
    console.log(updateRole);
  }

  pageList(end: number, begin: number = 0) {
    let list = this.fullList;
    this.users = list.slice(begin, end);
  }

  setRole(role) {
    this.newRole = role.value;
  }
}
