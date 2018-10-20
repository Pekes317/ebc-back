import { Module } from '@nestjs/common';

import { ImgUploadModule } from '../img-upload/img-upload.module';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';

@Module({
  imports: [ImgUploadModule],
  providers: [MobileService],
  controllers: [MobileController]
})
export class MobileModule {}
