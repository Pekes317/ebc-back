import { DbCollectedService } from './collected/db.collected.service';
import { DbEquipService } from './equipment/db.equipment.service';
import { DbItemsService } from './items/db.items.service';
import { DbSamplesService } from './samples/db.samples.service';
import { DbTempService } from './templates/db.templates.service';
import { DbUsersService } from './users/db.users.service';

export type CallService = DbCollectedService | DbEquipService | DbItemsService | DbSamplesService | DbTempService | DbUsersService;

export const Collect = 'collected';

export const Equip = 'equipment';

export const Item = 'items';

export const Sample = 'samples';

export const Temp = 'templates';

export const User = 'users';