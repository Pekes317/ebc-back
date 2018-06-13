import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeEffectsService, treeReducer } from '@beezleeart/ngx-tree';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([TreeEffectsService]),
    StoreModule.forFeature('folderStore', treeReducer),
  ],
  declarations: []
})
export class FolderStoreModule { }
