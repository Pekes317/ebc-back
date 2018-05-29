import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Users } from './db.users.entity';

@Entity()
export class Equipment {
	@PrimaryGeneratedColumn() id: number;

	@Column() device: string;

	@ManyToOne(type => Users, owner => owner.devices)
	owner: Users;
}