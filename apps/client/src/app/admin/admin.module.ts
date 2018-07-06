import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileManagerModule } from '@beezleeart/ngx-filemanager';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AdminIndexComponent } from './containers/admin-index/admin-index.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FilemanagerComponent } from './containers/filemanager/filemanager.component';
import { fileManagerConfig } from '../config/filemanager.config';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListComponent } from './containers/list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FileManagerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forChild()
  ],
  declarations: [AdminIndexComponent, ItemDetailComponent, FilemanagerComponent, ListComponent],
  entryComponents: [ItemDetailComponent]
})
export class AdminModule {
  public constructor(private translate: TranslateService) {
    this.setTranslationForEN();
    this.translate.use('en');
  }

  private setTranslationForEN(): void {
    this.translate.setTranslation('en', {
      RI_TREE_LBL_ADD_NODE: 'Add data',
      RI_TREE_LBL_EDIT_NODE: 'Edit data',
      RI_TREE_LBL_REMOVE_NODE: 'Delete data',
      RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level',
      RI_FM_BTN_LANDSCAPE: 'Landscape',
      RI_FM_BTN_PORTRAIT: 'Portrait',
      RI_FM_BTN_SQUARE: 'Square',
      RI_FM_BTN_SAVE: 'Save',
      RI_FM_LBL_CHOOSE_SELECTION: 'Choose selection',
      RI_FM_LBL_DELETE_SELECTION: 'Delete selection',
      RI_FM_LBL_INVERSE_SELECTION: 'Inverse selection',
      RI_FM_LBL_SEARCH_FOR: 'Search for...',
      RI_FM_LBL_SELECT_ALL: 'Select all',
      RI_FM_LBL_UNSELECT_ALL: 'Unselect all',
    });
  }
 }
