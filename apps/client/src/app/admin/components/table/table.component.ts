import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ModalTypes } from '../../../state/item-store/services/items-types.enum';

@Component({
  selector: 'ebc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() set ebcData(value: Array<ModalTypes>) {
    this.selection.clear();
    this.pageData.data = value;
  };
  get ebcData() { return this.pageData.data };
  @Input() ebcCols: Array<string> = [];
  @Output() isSelected: EventEmitter<Array<number>> = new EventEmitter();
  @Output() edit: EventEmitter<ModalTypes> = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageData: MatTableDataSource<ModalTypes> = new MatTableDataSource<ModalTypes>([]);
  selection: SelectionModel<number> = new SelectionModel<number>(true, []);

  constructor() { }

  ngOnInit() {
    this.pageData.paginator = this.paginator;
    this.selected();
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.pageData.data.length;
    return numSelected === numRows;
  }

  editItem(row: ModalTypes) {
    this.edit.emit(row);
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.pageData.data.forEach(row => this.selection.select(row.id));
  }

  selected() {
    this.selection.onChange
    .subscribe(() => {
      this.isSelected.emit(this.selection.selected);
    });
  }
}
