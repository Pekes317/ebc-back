import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FileManagerEffectsService, fileManagerReducer } from '@beezleeart/ngx-filemanager';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([FileManagerEffectsService]),
    StoreModule.forFeature('files', fileManagerReducer)
  ],
  declarations: []
})
export class FilesModule { }
