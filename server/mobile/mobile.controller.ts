import { Body, Controller, Delete, Get, HttpStatus, Post, Param, Put, Res, Req } from '@nestjs/common';

import { MobileService } from './mobile.service';
import { TypeDto } from './mobile.dto';
import { ItemDto } from '../object/object.dto';

@Controller('api/mobile')
export class MobileController {

	constructor(private readonly mobile: MobileService) { }

	@Post('create')
	addUserItem( @Req() req: any, @Res() res: any, @Body() data: ItemDto) {
		let user = req.uid;
		this.mobile.createItem(user, data)
		.then(item => res.status(HttpStatus.CREATED).send(item))
		.catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
	}

	@Get(':type')
	getUsersItems( @Req() req: any, @Res() res: any, @Param() param: TypeDto) {
		let user = req.uid;
		this.mobile.usersItems(user, param.type)
			.then(items => res.status(HttpStatus.OK).send(items))
			.catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
	}

	@Get('temp/:type')
	getTempItems( @Res() res: any, @Param() param: TypeDto) {
		this.mobile.tempItems(param.type)
			.then(items => res.status(HttpStatus.OK).send(items))
			.catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
	}

	@Get('sample/:type')
	getSampleItems( @Res() res: any, @Param() param: TypeDto) {
		this.mobile.sampleItems(param.type)
			.then(items => res.status(HttpStatus.OK).send(items))
			.catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
	}
}