import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Items } from './db.items.entity';

@Component()
export class DbItemsService {
    constructor( @InjectRepository(Items) private readonly items: Repository<Items>) {  }

    async findAll(): Promise<Items[]> {
       return await this.items.find();
    }
}
