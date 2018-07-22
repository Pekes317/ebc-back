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
import { auth } from 'firebase-admin';

import { UserDto, RoleDto } from './auth.dto';
import { AuthService } from './auth.service';
import { NoAuth } from '../common/auth.decorator';
import { Roles } from '../common/roles/roles.decorator';
import { RoleTypes } from '../common/roles/role-types.enum';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly userService: AuthService) {}

  @NoAuth(true)
  @Post('signup')
  createUser(@Res() res: any, @Body() newUser: UserDto) {
    this.userService
      .createNewUser(newUser)
      .then(user => res.status(HttpStatus.OK).send(user))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
  }
  
  @Roles(RoleTypes.admin, RoleTypes.owner)
  @Get('users')
  getUsers(@Res() res: any, @Query('next') next: string) {
    this.userService
      .getUsers(next)
      .then(users => res.status(HttpStatus.OK).send(users))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
  }
  
  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member, RoleTypes.user)
  @Post('update')
  updateUser(@Res() res: any, @Req() req: any, @Body() userUpdate: UserDto) {
    auth()
      .updateUser(req.uid, userUpdate)
      .then(updated => res.status(HttpStatus.OK).send(updated))
      .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
  }
  
  @Roles(RoleTypes.admin, RoleTypes.owner)
  @Post('role')
  updateSecRole(@Res() res: any, @Body() userRole: RoleDto) {
    this.userService
      .changeRoles(userRole.uid, userRole.role)
      .then(success => res.status(HttpStatus.ACCEPTED).send(success))
      .catch(err => res.status(HttpStatus.CONFLICT).send(err));
  }
}
