import { Injectable } from '@nestjs/common';

import { DbService } from '../db/db.service';

@Injectable()
export class MobileService {
  constructor(private readonly db: DbService) {}

  async createItem(user, item): Promise<any> {
    const newItem = this.db.items.create();
    return await this.db.users.find({ fbUser: user }).then(users => {
      let user = users[0];
      this.db.items.merge(newItem, item, { user: user });
      return this.db.items.save(newItem);
    });
  }

  async sampleItems(type): Promise<any> {
    let flyer = type === 'flyers' ? true : false;
    return await this.db.sample.find({ flyer: flyer });
  }

  async registerDevice(user, token): Promise<any> {
    const newDevice = this.db.equip.create();
    return await this.db.users.find({ fbUser: user }).then(users => {
      let user = users[0];
      this.db.equip.merge(newDevice, { device: token }, { owner: user });
      return this.db.equip.save(newDevice);
    });
  }

  async shareItem(item): Promise<any> {
    return await this.db.items.find(item);
  }

  async usersItems(user, type): Promise<any> {
    let flyer = type === 'flyers' ? true : false;
    return await this.db.users
      .find({ relations: ['items'], where: { fbUser: user } })
      .then(user => {
        let items = user[0].items.filter(items => items.flyer === flyer);
        return items;
      });
  }

  async tempItems(type): Promise<any> {
    let flyer = type === 'flyers' ? true : false;
    return await this.db.temp.find({ where: { flyer: flyer } });
  }
}
