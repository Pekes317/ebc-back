import { Module } from '@nestjs/common';

import { DbModule } from '../db/db.module';
import { ObjectController } from './object.controller'; 

@Module({
	imports: [ DbModule ],
	controllers: [
		ObjectController
	]
})
export class ObjectModule {}