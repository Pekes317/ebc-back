import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Collected } from './db.collected.entity';

@Component()
export class DbCollectedService {
    constructor( @InjectRepository(Collected) private readonly collect: Repository<Collected>) {  }

    async findAll(): Promise<Collected[]> {
       return await this.collect.find();
    }
}
