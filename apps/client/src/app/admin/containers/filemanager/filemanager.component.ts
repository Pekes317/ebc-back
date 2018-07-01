import { Component, OnInit } from '@angular/core';
import { FileManagerConfiguration, FileManagerDispatcherService } from '@beezleeart/ngx-filemanager';

import { adminNav } from '../../admin-nav';
 
@Component({
  selector: 'ebc-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FilemanagerComponent implements OnInit {
  nav = adminNav;

  constructor(public fileManagerConfiguration: FileManagerConfiguration,
    private fileManagerDispatcher: FileManagerDispatcherService) { }

  ngOnInit() { }

  public toggleMultiSelection() {
    this.fileManagerConfiguration.isMultiSelection = !this.fileManagerConfiguration.isMultiSelection;

    if (!this.fileManagerConfiguration.isMultiSelection) {
      this.fileManagerDispatcher.unSelectAllFiles();
    }
  }
}
