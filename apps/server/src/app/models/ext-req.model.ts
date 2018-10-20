import { Request } from 'express';

export interface ExtRequest extends Request {
	token: string;
	uid: string;
}