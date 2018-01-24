import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Equipment } from './db.equipment.entity';

@Component()
export class DbEquipService {
    constructor( @InjectRepository(Equipment) private readonly equip: Repository<Equipment>) {  }

    async findAll(): Promise<Equipment[]> {
       return await this.equip.find();
    }
}
