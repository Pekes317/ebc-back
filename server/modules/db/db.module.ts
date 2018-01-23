import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DbService } from './db.service';
import { Collected } from './db.collected.entity';
import { Equipment } from './db.equipment.entity';
import { Items } from './db.items.entity';
import { Samples } from './db.samples.entity';
import { Templates } from './db.templates.entity';
import { Users } from './db.users.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ Collected, Equipment, Items, Samples, Templates, Users ]) ],
	components: [ DbService ],
	exports: [ DbService ]
})
export class DbModule {}
