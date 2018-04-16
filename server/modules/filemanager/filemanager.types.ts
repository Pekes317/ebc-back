export interface Directory {
	id: string;
	parentId: any;
	name: string;
	children: Array<any>;
}

export interface File extends Dimensions {
	id: string;
	folderId: string;
	name: string;
	thumbnailUrl: string;
	url: string;
	type: string | boolean;
}

export interface Dimensions {
	height: string | number;
	width: string | number;
}