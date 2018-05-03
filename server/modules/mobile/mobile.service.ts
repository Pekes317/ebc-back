import { Component } from '@nestjs/common';
import { Repository } from 'typeorm';

import { DbService } from '../db/db.service';

@Component()
export class MobileService {

	constructor(private readonly db: DbService) { }

	async createItem(user, item): Promise<any> {
		const newItem = this.db.items.create();
		return await this.db.users.find({ fbUser: user })
			.then(users => {
				let user = users[0];
				this.db.items.merge(newItem, item, { user: user })
				return this.db.items.save(newItem);
			})
	}

	async sampleItems(type): Promise<any> {
		let flyer = (type === 'flyers') ? true : false;
		return await this.db.sample.find({ flyer: flyer });
	}

	async registerDevice(user, device): Promise<any> {
		const newDevice = this.db.equip.create();
		return await this.db.users.find({ fbUser: user })
			.then(users => {
				let user = users[0];
				this.db.equip.merge(newDevice, device, { owner: user })
				return this.db.items.save(newDevice);
			})
	}

	async shareItem(item): Promise<any> {
		return await this.db.items.findByIds(item);
	}

	async usersItems(user, type): Promise<any> {
		let flyer = (type === 'flyers') ? true : false;
		return await this.db.users.find({ relations: ['items'], where: { fbUser: user } })
			.then(user => {
				let items = user[0].items.filter(items => items.flyer === flyer);
				return items;
			});
	}
	
	async tempItems(type): Promise<any> {
		let flyer = (type === 'flyers') ? true : false;
		return await this.db.temp.find({ where: { flyer: flyer } });
	}
}