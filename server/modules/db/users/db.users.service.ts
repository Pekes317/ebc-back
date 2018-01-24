import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from './db.users.entity';

@Component()
export class DbUsersService {
    constructor( @InjectRepository(Users) private readonly users: Repository<Users>) {  }

    async findAll(): Promise<Users[]> {
       return await this.users.find();
    }
}
