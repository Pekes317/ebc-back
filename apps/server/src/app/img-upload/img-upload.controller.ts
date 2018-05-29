import { Body, Controller, Get, Post, Query, Res, HttpStatus } from '@nestjs/common';

import { ImgUploadService } from './img-upload.service';
import { NoAuth } from  '../common/auth.decorator';

@Controller('api')
export class ImgUploadController {

	constructor(private imgUploadService: ImgUploadService) { }

	@NoAuth(true)
	@Get('media')
	getSvg(@Res() res: any, @Query() media: any) {
			this.imgUploadService.getFileContents(media.url)
				 .then(file => res.status(HttpStatus.OK).send({ media: file }))
				 .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
	}

	@Post('upload')
	uploadImg(@Res() res: any, @Body() upload: any) {
		this.imgUploadService.addSign(upload)
		.then(image => res.status(HttpStatus.ACCEPTED).send(image))
		.catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
	}
}