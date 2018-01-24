import { Component } from '@nestjs/common';

import { DbCollectedService } from './collected/db.collected.service';
import { DbEquipService } from './equipment/db.equipment.service';
import { DbItemsService } from './items/db.items.service';
import { DbSamplesService } from './samples/db.samples.service';
import { DbTempService } from './templates/db.templates.service';
import { DbUsersService } from './users/db.users.service';
import { Collect, Equip, DbTable } from './db.route.types';

@Component()
export class DbService {
    constructor(private readonly collectService: DbCollectedService, private readonly equipService: DbEquipService) { }

    async findAll(dbTable): Promise<any[]> {
        switch (dbTable) {
            case Collect:
                return await this.collectService.findAll();
            case Equip:
                return await this.equipService.findAll();
            default:
             return await [];
        }
    }
}
