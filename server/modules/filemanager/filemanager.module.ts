import { Module } from '@nestjs/common';

import { FilesController } from './files.controller';
import { FilemanagerService } from './filemanager.service';
import { FoldersController } from './folders.controller';

@Module({
  controllers: [ FilesController, FoldersController ],
  components: [ FilemanagerService ]
})
export class FileManagerModule { }
