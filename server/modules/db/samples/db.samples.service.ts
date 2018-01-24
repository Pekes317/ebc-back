import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Samples } from './db.samples.entity';

@Component()
export class DbSamplesService {
    constructor( @InjectRepository(Samples) private readonly sample: Repository<Samples>) {  }

    async findAll(): Promise<Samples[]> {
       return await this.sample.find();
    }
}
