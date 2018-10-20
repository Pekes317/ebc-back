import { Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Items } from './db.items.entity';
import { Users } from './db.users.entity';

@Entity()
export class Collected {
	@PrimaryGeneratedColumn() id: number;

	@OneToOne(type => Users, user => user.collection)
	client: Users;

	@ManyToMany(type => Items, items => items.clients)
	@JoinTable()
	product: Items[];
}