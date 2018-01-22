import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DbService } from './db.service';

@Module({
	imports: [ TypeOrmModule.forFeature() ],
	components: [ DbService ],
	exports: [ DbService ]
})
export class DbModule {}
