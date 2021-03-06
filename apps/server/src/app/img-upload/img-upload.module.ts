import { Module } from '@nestjs/common';

import { ImgUploadController } from './img-upload.controller';
import { ImgUploadService } from './img-upload.service';

@Module({
  controllers: [ImgUploadController],
  providers: [ImgUploadService],
  exports: [ImgUploadService]
})
export class ImgUploadModule {}
