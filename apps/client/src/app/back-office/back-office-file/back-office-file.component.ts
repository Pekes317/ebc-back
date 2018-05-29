import { Component, OnInit} from '@angular/core';
import { FileManagerConfiguration, FileManagerDispatcherService } from '@beezleeart/ngx-filemanager';

@Component({
  selector: 'app-back-office-file',
  templateUrl: './back-office-file.component.html',
  styleUrls: ['./back-office-file.component.scss']
})
export class BackOfficeFileComponent implements OnInit {

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
