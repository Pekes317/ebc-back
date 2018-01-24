import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Templates } from './db.templates.entity';

@Component()
export class DbTempService {
    constructor( @InjectRepository(Templates) private readonly temp: Repository<Templates>) {  }

    async findAll(): Promise<Templates[]> {
       return await this.temp.find();
    }
}
