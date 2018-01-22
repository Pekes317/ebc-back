import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collected {
	@PrimaryGeneratedColumn() id: number;

	@Column() client: number;

	@Column() product: number;
}