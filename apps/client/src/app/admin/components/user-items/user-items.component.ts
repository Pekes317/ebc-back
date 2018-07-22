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
  selector: 'ebc-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.scss']
})
export class UserItemsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input()
  set registered(value: Array<auth.UserRecord>) {
    this.fullList = value;
    this.pageList(5);
  }
  @Output() getNext: EventEmitter<boolean> = new EventEmitter();
  @Output() newRole: EventEmitter<{ uid: string, role: string }> = new EventEmitter();
  
  fullList: Array<auth.UserRecord> = [];
  roles: Array<string> = [ 'admin', 'owner', 'member', 'user'];
  setUserRole: string = '';
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

  editUser(user: auth.UserRecord) {
    let role = (this.setUserRole === '') ? user.customClaims['role'] : this.setUserRole;
    let updateRole = {
      uid: user.uid,
      role: role
    };
    this.newRole.next(updateRole);
  }

  pageList(end: number, begin: number = 0) {
    let list = this.fullList;
    this.users = list.slice(begin, end);
  }

  setRole(role) {
    this.setUserRole = role.value;
  }
}
