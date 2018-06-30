import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileManagerModule } from '@beezleeart/ngx-filemanager';
import { TranslateModule } from '@ngx-translate/core';

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
    FileManagerModule.forChild(fileManagerConfig),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forChild()
  ],
  declarations: [AdminIndexComponent, ItemDetailComponent, FilemanagerComponent, ListComponent],
  entryComponents: [ItemDetailComponent]
})
export class AdminModule { }
