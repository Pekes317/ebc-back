import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
  Req
} from '@nestjs/common';
import { Response } from 'express';

import { ImgUploadService } from './img-upload.service';
import { NoAuth } from '../common/auth.decorator';
import { Roles } from '../common/roles/roles.decorator';
import { RoleTypes } from '../common/roles/role-types.enum';
import { ExtRequest } from '../models/ext-req.model';
import { UploadImg } from '../models/upload-img.model';

@Controller('api')
export class ImgUploadController {
  constructor(private imgUploadService: ImgUploadService) {}

  @NoAuth(true)
  @Get('media')
  getSvg(@Res() res: Response, @Query() media: { url: string }) {
    this.imgUploadService
      .getFileContents(media.url)
      .then(file => res.status(HttpStatus.OK).send({ media: file }))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('user/img')
  updateImage(@Res() res: Response, @Req() req: ExtRequest, @Body() img: UploadImg) {
    this.imgUploadService
      .updateProfile(img, req.uid)
      .then(image => res.status(HttpStatus.ACCEPTED).send(image))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('upload')
  uploadImg(@Res() res: Response, @Body() upload: UploadImg) {
    this.imgUploadService
      .addImg(upload)
      .then(image => res.status(HttpStatus.ACCEPTED).send(image))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
  }
}
