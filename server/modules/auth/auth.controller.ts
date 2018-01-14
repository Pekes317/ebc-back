import { Controller, Get, HttpStatus, Post, Res, Query } from '@nestjs/common';
import { signin, signout } from '@backand/nodejs-sdk';

import { SignInDto } from './auth.dto';

@Controller('api/auth')
export class AuthController {
    constructor() { }

    @Get()
    removeToken( @Res() res: any) {
        signout()
            .then(success => res.status(HttpStatus.OK).send(success))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Post()
    addToken( @Res() res: any, @Query() creds: SignInDto) {
        signin(creds.username, creds.password)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }
}
