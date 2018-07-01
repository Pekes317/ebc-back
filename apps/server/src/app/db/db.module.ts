import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Collected } from './db.collected.entity';
import { DbService } from './db.service';
import { Equipment } from './db.equipment.entity';
import { Items } from './db.items.entity';
import { Samples } from './db.samples.entity';
import { Templates } from './db.templates.entity';
import { Users } from './db.users.entity';

const dbEntities = [
	Collected,
	Equipment,
	Items,
	Samples,
	Templates,
	Users
];

@Global()
@Module({
	imports: [
		TypeOrmModule.forFeature(dbEntities)
	],
	providers: [
		DbService
	],
	exports: [
		DbService
	]
})
export class DbModule { }
