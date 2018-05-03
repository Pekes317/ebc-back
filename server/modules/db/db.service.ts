import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Collected } from './db.collected.entity';
import { Equipment } from './db.equipment.entity';
import { Items } from './db.items.entity';
import { Samples } from './db.samples.entity';
import { Templates } from './db.templates.entity';
import { Users } from './db.users.entity';
import { Collect, Equip, Item, Sample, Temp, User } from './db.route.types';

@Component()
export class DbService {
    constructor(@InjectRepository(Collected) public readonly collect: Repository<Collected>,
        @InjectRepository(Equipment) public readonly equip: Repository<Equipment>,
        @InjectRepository(Items) public readonly items: Repository<Items>,
        @InjectRepository(Samples) public readonly sample: Repository<Samples>,
        @InjectRepository(Templates) public readonly temp: Repository<Templates>,
        @InjectRepository(Users) public readonly users: Repository<Users>) { }

    async setTable(dbTable) {
        switch (dbTable) {
            case Collect:
                return await this.collect;
            case Equip:
                return await this.equip;
            case Item:
                return await this.items;
            case Sample:
                return await this.sample;
            case Temp:
                return await this.temp;
            case User:
                return await this.users;
        }
    }

    async createOne(callTbl: Repository<any>, newItem): Promise<any> {
        return callTbl.save(newItem);
    }

    async deleteOne(callTbl: Repository<any>, id): Promise<any> {
        return await callTbl.delete(id);
    }

    async getAll(callTbl: Repository<any>): Promise<any> {
        return await callTbl.find();
    }

    async getOne(callTbl: Repository<any>, id): Promise<any> {
        return await callTbl.findByIds(id);
    }

    async updateOne(callTbl: Repository<any>, id, partial): Promise<any> {
        return await callTbl.update(id, partial);
    }
}
