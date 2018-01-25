import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Collected } from '../collected/db.collected.entity';
import { Equipment } from '../equipment/db.equipment.entity';
import { Items } from '../items/db.items.entity'

@Entity()
export class Users {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() email: string;

  @Column() firstName: string;

  @Column() lastName: string;

  @Column('datetime') since: Date;

  @Column() subscribed: boolean;

  @OneToMany(type => Items, items => items.user)
  items: Items[];

  @OneToMany(type => Equipment, devices => devices.owner)
  devices: Equipment[];

  @OneToOne(type => Collected, collect => collect.client)
  @JoinColumn()
  collection: Collected;
}