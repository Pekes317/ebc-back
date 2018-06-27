import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileManagerModule } from '@beezleeart/ngx-filemanager';

import { AdminIndexComponent } from './containers/admin-index/admin-index.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FilemanagerComponent } from './containers/filemanager/filemanager.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FileManagerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [AdminIndexComponent, ItemDetailComponent, FilemanagerComponent],
  entryComponents: [ItemDetailComponent]
})
export class AdminModule { }
