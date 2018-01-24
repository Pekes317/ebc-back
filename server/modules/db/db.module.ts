import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DbCollectedService } from './collected/db.collected.service';
import { DbEquipService } from './equipment/db.equipment.service';
import { DbItemsService } from './items/db.items.service';
import { DbSamplesService } from './samples/db.samples.service';
import { DbService } from './db.service';
import { DbTempService } from './templates/db.templates.service';
import { DbUsersService } from './users/db.users.service';

import { Collected } from './collected/db.collected.entity';
import { Equipment } from './equipment/db.equipment.entity';
import { Items } from './items/db.items.entity';
import { Samples } from './samples/db.samples.entity';
import { Templates } from './templates/db.templates.entity';
import { Users } from './users/db.users.entity';

const dbEntities = [
	Collected,
	Equipment,
	Items,
	Samples,
	Templates,
	Users
]

@Module({
	imports: [ TypeOrmModule.forFeature(dbEntities) ],
	components: [ 
		DbCollectedService,
		DbEquipService,
		DbItemsService,
		DbSamplesService,
		DbService,
		DbTempService,
		DbUsersService
	],
	exports: [ DbService ]
})
export class DbModule {}
