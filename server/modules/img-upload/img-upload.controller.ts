import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';

import { NoAuth } from '../common/auth.decorator';
import { ImgUploadService } from './img-upload.service';

@Controller('api/upload')
export class ImgUploadController {

	constructor(private imgUploadService: ImgUploadService) { }

	@NoAuth(true)
	@Post()
	uploadImg(@Res() res: any, @Body() upload: any) {
		this.imgUploadService.addSign(upload)
		.then(image => res.status(HttpStatus.ACCEPTED).send(image))
		.catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
	}
}