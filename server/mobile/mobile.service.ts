import { Component } from '@nestjs/common';
import { Repository } from 'typeorm';

import { DbService } from '../db/db.service';

@Component()
export class MobileService {

	constructor(private readonly db: DbService) { }

	async createItem(user, item): Promise<any> {
		const newItem = this.db.users.create();
		return await this.db.users.find({ fbUser: user })
			.then(users => {
				let user = users[0];
				user.items.push(item);
				this.db.users.merge(newItem, user);
				return this.db.users.save(newItem);
			})
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
		return await this.db.temp.find({ flyer: flyer });
	}

	async sampleItems(type): Promise<any> {
		let flyer = (type === 'flyers') ? true : false;
		return await this.db.sample.find({ flyer: flyer });
	}
}