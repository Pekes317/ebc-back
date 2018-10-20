import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Param,
  Res,
  Req,
  UseInterceptors
} from '@nestjs/common';

import { DeviceDto, TypeDto } from './mobile.dto';
import { ItemDto } from '../object/object.dto';
import { MobileService } from './mobile.service';
import { NoAuth } from '../common/auth.decorator';
import { Roles } from '../common/roles/roles.decorator';
import { RoleTypes } from '../common/roles/role-types.enum';
import { SlackInterceptor } from '../common/slack.interecptor';

@Controller('api/mobile')
export class MobileController {
  constructor(private readonly mobile: MobileService) {}

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('register')
  addUserDevice(@Req() req: any, @Res() res: any, @Body() device: DeviceDto) {
    let user = req.uid;
    this.mobile
      .registerDevice(user, device.token)
      .then(mobile => res.status(HttpStatus.CREATED).send(mobile))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @UseInterceptors(SlackInterceptor)
  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('create')
  addUserItem(@Req() req: any, @Res() res: any, @Body() data: ItemDto) {
    let user = req.uid;
    this.mobile
      .createItem(user, data)
      .then(item => res.status(HttpStatus.CREATED).send(item))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Get(':type')
  getUsersItems(@Req() req: any, @Res() res: any, @Param() param: TypeDto) {
    let user = req.uid;
    this.mobile
      .usersItems(user, param.type)
      .then(items => res.status(HttpStatus.OK).send(items))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Get('sample/:type')
  getSampleItems(@Res() res: any, @Param() param: TypeDto) {
    this.mobile
      .sampleItems(param.type)
      .then(items => res.status(HttpStatus.OK).send(items))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @NoAuth(true)
  @Get('shared/:id')
  getSharedItem(@Res() res: any, @Param() param: number) {
    this.mobile
      .shareItem(param)
      .then(item => res.status(HttpStatus.OK).send(item[0]))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Get('temp/:type')
  getTempItems(@Res() res: any, @Param() param: TypeDto) {
    this.mobile
      .tempItems(param.type)
      .then(items => res.status(HttpStatus.OK).send(items))
      .catch(err => res.status(HttpStatus.REQUEST_TIMEOUT).send(err));
  }
}
