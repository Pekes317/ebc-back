export interface Bounds { 
	height: number;
	width: number;
	y: number;
	x: number;
}

export interface Dimensions {
	height: string | number;
	width: string | number;
}

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

export interface FileUpdate {
	fileId: string;
	bounds: Bounds | null;
	files: Array<string> | null;
	folderId: string | null;
}