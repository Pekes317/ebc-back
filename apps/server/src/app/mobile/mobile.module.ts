import { Module } from '@nestjs/common';

import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';

@Module({
  providers: [MobileService],
  controllers: [MobileController]
})
export class MobileModule {}
