import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Param,
  Res,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';

import { NoAuth } from '../common/auth.decorator';
import { Roles } from '../common/roles/roles.decorator';
import { RoleTypes } from '../common/roles/role-types.enum';
import { SlackInterceptor } from '../common/slack.interecptor';
import { DeviceDto, ItemImgDto, TypeDto } from './mobile.dto';
import { ItemDto } from '../object/object.dto';
import { MobileService } from './mobile.service';
import { ExtRequest } from '../models/ext-req.model';

@Controller('api/mobile')
export class MobileController {
  constructor(private readonly mobile: MobileService) {}

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('register')
  addUserDevice(
    @Req() req: ExtRequest,
    @Res() res: Response,
    @Body() device: DeviceDto,
  ) {
    this.mobile
      .registerDevice(req.uid, device.token)
      .then(mobile => res.status(HttpStatus.CREATED).send(mobile))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @UseInterceptors(SlackInterceptor)
  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('create')
  addUserItem(
    @Req() req: ExtRequest,
    @Res() res: Response,
    @Body() data: ItemDto,
  ) {
    this.mobile
      .createItem(req.uid, data)
      .then(item => res.status(HttpStatus.CREATED).send(item))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }
  @UseInterceptors(SlackInterceptor)
  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('create/img')
  addItemImg(
    @Req() req: ExtRequest,
    @Res() res: Response,
    @Body() data: ItemImgDto,
  ) {
    this.mobile
      .createItem(req.uid, data)
      .then(item => res.status(HttpStatus.CREATED).send(item))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Get(':type')
  getUsersItems(
    @Req() req: ExtRequest,
    @Res() res: Response,
    @Param() param: TypeDto,
  ) {
    this.mobile
      .usersItems(req.uid, param.type)
      .then(items => res.status(HttpStatus.OK).send(items))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Get('sample/:type')
  getSampleItems(@Res() res: Response, @Param() param: TypeDto) {
    this.mobile
      .sampleItems(param.type)
      .then(items => res.status(HttpStatus.OK).send(items))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @NoAuth(true)
  @Get('shared/:id')
  getSharedItem(@Res() res: Response, @Param() param: number) {
    this.mobile
      .shareItem(param)
      .then(item => res.status(HttpStatus.OK).send(item[0]))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Get('temp/:type')
  getTempItems(@Res() res: Response, @Param() param: TypeDto) {
    this.mobile
      .tempItems(param.type)
      .then(items => res.status(HttpStatus.OK).send(items))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }
}
