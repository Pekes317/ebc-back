import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus
} from '@nestjs/common';
import { Response } from 'express';

import { AdminService } from './admin.service';
import { MessageDto } from './message.dto';
import { NoAuth } from '../common/auth.decorator';

@Controller('api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @NoAuth(true)
  @Post('devices')
  messageDevices(@Res() res: Response, @Body() fcm: MessageDto) {
    this.adminService
      .sendMessage(fcm)
      .then(message => res.status(HttpStatus.OK).send(message))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
  }

  @NoAuth(true)
  @Get('devices/:id')
  userDevices(@Res() res: Response, @Param('id') id: number) {
    this.adminService
      .getDevices(id)
      .then(devices => res.status(HttpStatus.OK).send(devices))
      .catch(err => res.status(HttpStatus.NOT_FOUND).send(err));
  }
}
