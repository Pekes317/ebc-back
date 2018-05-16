import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Templates {
	@PrimaryGeneratedColumn() id: number;

	@Column() name: string;

	@Column('text') desc: string;

	@Column() media: string;

	@Column() pic: string;

	@Column() ready: boolean;

	@Column() flyer: boolean;

	@Column() disable: boolean;
}