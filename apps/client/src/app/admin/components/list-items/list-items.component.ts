import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { auth } from 'firebase-admin';

@Component({
  selector: 'ebc-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @Input()
  set registered(value: Array<auth.UserRecord>) {
    this.fullList = value;
    this.pageList(this.paginator.pageSize);
  }
  @Input()
  set getNext(flag: boolean) {
    this.next = flag;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  next: boolean = false;
  fullList: Array<auth.UserRecord> = [];
  users: Array<auth.UserRecord> = [];

  constructor() {}

  ngOnInit() {
    this.paginator.page.subscribe(page => {
      let start = page.pageIndex * page.pageSize;
      let next = start + page.pageSize;
      this.pageList(next, start);
    });
  }

  editUser(user) {
    console.log(user);
  }

  pageList(end: number, begin: number = 0) {
    let list = this.fullList;
    this.users = list.slice(begin, end);
  }
}
