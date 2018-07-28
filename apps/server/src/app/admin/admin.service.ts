import { Injectable } from '@nestjs/common';
import { messaging } from 'firebase-admin';

import { DbService } from '../db/db.service';
import { Equipment } from '../db/db.equipment.entity';
import { MessageDto } from './message.dto';

@Injectable()
export class AdminService {
	constructor(private readonly db: DbService) {}
	
	createPayload(fcm: MessageDto, device: string) {
		const payload: messaging.Message = {
			notification: {
				title: fcm.title,
					body: fcm.message
			},
			token: device
		}
		return payload;
	}
	 
  async getDevices(id: number) {
    const user = await this.db.users.find({ where: { id: id } });
    const devices = await this.db.equip.find({ where: { owner: user[0] } });
    return devices;
	}

	async message(devices: Array<Equipment>, message: MessageDto) {
		let results: Array<Promise<string>> = [];
		devices.map(async user => {
      const payload = this.createPayload(message, user.device);
			const fcm = messaging().send(payload);
			results.push(fcm);
		});
		return Promise.all(results);
	}
	
	async sendMessage(fcm: MessageDto) {
		const devices = await this.getDevices(fcm.id);
		const message = await this.message(devices, fcm);
		return message;
	}
}
