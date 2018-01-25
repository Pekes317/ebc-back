import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Users } from '../users/db.users.entity';

@Entity()
export class Equipment {
	@PrimaryGeneratedColumn() id: number;

	@Column() device: string;

	@ManyToOne(type => Users, )
	owner: Users;
}