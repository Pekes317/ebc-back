import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';

@Controller('api/manager')
export class FilesController {

	constructor() { }

	@Post('files')
	addFiles() {

	}

	@Delete('files')
	deleteFiles() {

	}

	@Get('files')
	getFiles() {
		
	}

	@Post('files')
	updateFile() {

	}
}