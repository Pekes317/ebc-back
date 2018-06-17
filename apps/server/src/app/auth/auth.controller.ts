import { Body, Controller, Get, HttpStatus, Post, Res, Req } from '@nestjs/common';
import { auth } from 'firebase-admin';

import { UserDto } from './auth.dto';
import { AuthService } from './auth.service';
import { NoAuth } from '../common/auth.decorator';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly userService: AuthService) { }

    @NoAuth(true)
    @Post('signup')
    createUser(@Res() res: any, @Body() newUser: UserDto) {
        this.userService.createNewUser(newUser)
            .then(user => res.status(HttpStatus.OK).send(user))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }

    @Post('update')
    updateUser(@Res() res: any, @Req() req: any, @Body() userUpdate: UserDto) {
        auth().updateUser(req.uid, userUpdate)
            .then(updated => res.status(HttpStatus.OK).send(updated))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }
}