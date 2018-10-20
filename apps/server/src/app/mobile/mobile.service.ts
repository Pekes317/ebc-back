import { Injectable } from '@nestjs/common';

import { DbService } from '../db/db.service';
import { ImgUploadService } from '../img-upload/img-upload.service';
import { ItemImgDto } from './mobile.dto';
import { CloudinaryUpload } from '../models/upload-img.model';
import { ItemDto } from '../object/object.dto';

@Injectable()
export class MobileService {
  constructor(private readonly db: DbService, private img: ImgUploadService) {}

  async createItem(user: string, item): Promise<any> {
    const newItem = this.db.items.create();
    return await this.db.users.find({ fbUser: user }).then(users => {
      let user = users[0];
      this.db.items.merge(newItem, item, { user: user });
      return this.db.items.save(newItem);
    });
  }

  async createImg(user: string, item: ItemImgDto): Promise<any> {
    try {
      const imgData = await this.img.setTags(item.picture, user);
      const img: CloudinaryUpload = await this.img.uploadImg(imgData);
      const newItem: ItemDto = { ...item.item, pic: img.secure_url };
      return await this.createItem(user, newItem);
    } catch (error) {
      throw error;
    }
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
