import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment {
	@PrimaryGeneratedColumn() id: number;

	@Column() device: string;

	@Column() owner: number
}