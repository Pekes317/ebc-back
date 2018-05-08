import { Module } from '@nestjs/common';

import { FilesController } from './files.controller';
import { FileService } from './file.service';
import { FolderService } from './folder.service';
import { FoldersController } from './folders.controller';

@Module({
  controllers: [ FilesController, FoldersController ],
  components: [ FileService, FolderService ]
})
export class FileManagerModule { }
