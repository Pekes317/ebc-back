export class CollectedDto {
	readonly client: string;
	readonly product: string;
}

export class EquipDto {
	readonly token: string;
	readonly device: string;
}

export class GetObjDto {
	readonly list: string;
	readonly id?: string;
}

export class ItemDto {
	readonly name: string;
	readonly desc: string;
	readonly media: string;
	readonly pic: string;
	readonly flyer: boolean;
	readonly data?: string;
	readonly ready: boolean;
	readonly disable: boolean;
	readonly user?: string;
}

export type NewItemDto = CollectedDto | EquipDto | ItemDto;
