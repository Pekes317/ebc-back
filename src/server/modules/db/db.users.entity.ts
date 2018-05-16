import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Collected } from './db.collected.entity';
import { Equipment } from './db.equipment.entity';
import { Items } from './db.items.entity'

@Entity()
export class Users {
  @PrimaryGeneratedColumn() id: number;

  @Column() fbUser: string;

  @Column() email: string;

  @OneToMany(type => Items, items => items.user)
  items: Items[];

  @OneToMany(type => Equipment, devices => devices.owner)
  devices: Equipment[];

  @OneToOne(type => Collected, collect => collect.client)
  @JoinColumn()
  collection: Collected;
}