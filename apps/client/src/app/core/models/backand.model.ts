export interface BackandItem {
	id: number;
	name: string;
	desc: string;
	media: string;
	pic: string;
	flyer: boolean;
	ready: boolean;
	disable: boolean;
	data?: string;
	clients?: any;
	user?: any;
}