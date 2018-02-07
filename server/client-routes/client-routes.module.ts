import { Module } from '@nestjs/common';

import { ClientRoutesController } from './client-routes.controller';
import { ClientRoutesService } from './client-routes.service';

@Module({
  controllers: [
    ClientRoutesController
  ],
  components: [
    ClientRoutesService
  ],
  exports: [
    ClientRoutesService
  ]
})
export class ClientRoutesModule {}
