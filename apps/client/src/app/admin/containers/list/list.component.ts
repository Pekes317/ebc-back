import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { adminNav } from '../../admin-nav';
import { ItemDetailComponent } from '../../components/item-detail/item-detail.component';
import { AddAdminObj, DeleteAdminObjs, LoadAdminObjs, UpdateAdminObj } from '../../../state/item-store/actions/admin-data.actions';
import { ModalTypes } from '../../../state/item-store/services/items-types.enum';
import { ItemDialogModel } from '../../components/item-detail/item-data.type';
import { SelectorService } from '../../../core/services/selector.service';
import * as fromAdmin from '../../../state/item-store/reducers';

@Component({
  selector: 'ebc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnDestroy, OnInit {
  listData$: Observable<any>;
  nav = adminNav;
  params: Subscription;
  selectedRows: Array<number> = [];
  tableCol: Array<string> = [];
  title: string = '';

  constructor(private route: ActivatedRoute, private dialog: MatDialog, private selecService: SelectorService,
    private snack: MatSnackBar, private store: Store<fromAdmin.ItemState>) { }

  ngOnInit() {
    this.params = this.route.params.subscribe(table => {
      this.title = table.collect;
      this.store.dispatch(new LoadAdminObjs(table.collect));
      this.getData(table.collect);
    });
  }

  ngDoCheck() {}

  ngOnDestroy() {
    this.params.unsubscribe();
  }

  addRemove(del: boolean) {
    if (del) {
      this.store.dispatch(new DeleteAdminObjs({ collection: this.title, ids: this.selectedRows }));
    } else {
      this.detailDialog(del);
    }
  }

  completeModal(ebcItem: MatDialogRef<ItemDetailComponent>, edit) {
    ebcItem.afterClosed().subscribe(
      results => {
        if (results && results.toast) {
          let message = this.snack.open(`Item has been ${this.setMessage(edit)}`, 'Okay');
          let action = edit ? new UpdateAdminObj({ collection: this.title, data: results.data }) : new AddAdminObj({ collection: this.title, data: results.data });
          this.store.dispatch(action);
          this.toastDismiss(message);
        }
      });
  }

  getData(collection) {
    let selector = this.selecService.selectAll(collection);
    this.listData$ = this.store.pipe(select(selector));
    this.tableCol = this.selecService.displayColumns(collection);
  }

  editItem(oldItem: ModalTypes) {
    this.detailDialog(true, oldItem);
  }

  detailDialog(edit: boolean, item?: ModalTypes) {
    let ebcDialog: MatDialogRef<ItemDetailComponent>;
    let data: ItemDialogModel = {
      ebcItem: item,
      edit: false,
      type: this.title
    };
    if (edit) {
      ebcDialog = this.dialog.open(ItemDetailComponent, { data: data });
    } else {
      ebcDialog = this.dialog.open(ItemDetailComponent, { data: { type: this.title } });
    };
    
    this.completeModal(ebcDialog, edit);
  }

  selected(selection: Array<number>) {
    this.selectedRows = selection;
  }

  setMessage(edit) {
    let text;
    if (edit) {
      text = 'Updated';
    } else {
      text = 'Created';
    }
    return text;
  }

  toastDismiss(message) {
    setTimeout(() => {
      message.dismiss();
    }, 3000);
  }
}
