import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Collected } from './db.collected.entity';
import { Users } from './db.users.entity';

@Entity()
export class Items {
	@PrimaryGeneratedColumn() id: number;

	@Column() name: string;

	@Column('text') desc: string;

	@Column('text') data: string;

	@ManyToOne(type => Users, users => users.items, { cascade: true })
	user: Users;

	@Column() media: string;

	@Column() pic: string;

	@Column() ready: boolean;

	@Column() flyer: boolean;

	@Column() disable: boolean;

	@ManyToMany(type => Collected, collect => collect.product)
	clients: Collected[];
}