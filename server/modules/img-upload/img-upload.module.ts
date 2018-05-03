import { Module } from '@nestjs/common';

import { ImgUploadController } from './img-upload.controller';
import { ImgUploadService } from  './img-upload.service';

@Module({
  controllers: [ ImgUploadController ],
  components: [ ImgUploadService ]
})
export class ImgUploadModule { }