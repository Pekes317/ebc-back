import { Body, Controller, Get, HttpStatus, Post, Res, Req } from '@nestjs/common';
import { auth } from 'firebase-admin';

import { NewPassDto, ResetPassDto, ResetReqDto, SignInDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
import { NoAuth } from '../common/auth.decorator';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly userService: AuthService) { }

    @NoAuth(true)
    @Post('signup')
    createUser( @Res() res: any, @Body() newUser: SignUpDto) {
        this.userService.createNewUser(newUser)
            .then(user => res.status(HttpStatus.OK).send(user))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }
}