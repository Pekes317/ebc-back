import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'ebc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() set ebcData(value) {
     this.pageData.data = value;
  };
  get ebcData() { return this.pageData.data };
  @Input() ebcCols = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageData: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit() {
    this.pageData.paginator = this.paginator;
  }

  ngDoCheck() {
    console.log('tb', this.paginator, this.pageData);
  }
}
