import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './containers/index/index.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FilemanagerComponent } from './containers/filemanager/filemanager.component';
import { FilesModule } from './store/files/files.module';
import { FolderModule }  from './store/folder/folder.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FilesModule,
    FolderModule,
    SharedModule
  ],
  declarations: [IndexComponent, ItemDetailComponent, FilemanagerComponent],
  entryComponents: [ItemDetailComponent]
})
export class AdminModule { }
