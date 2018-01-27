import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { auth } from 'firebase-admin';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { NewPassDto, ResetPassDto, ResetReqDto, SignInDto, SignUpDto } from './auth.dto';

@Controller('api/auth')
export class AuthController {
    constructor() { }

    @Post('token')
    addToken( @Res() res: any, @Body() creds: SignInDto) {
        firebase.auth().signInWithEmailAndPassword(creds.username, creds.password)
            .then(user => res.status(HttpStatus.OK).send(user))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Post('signup')
    createUser( @Res() res: any, @Body() newUser: SignUpDto) {
        auth().createUser(newUser)
            .then(user => res.status(HttpStatus.OK).send(user))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Post('newPass')
    newPassword( @Res() res: any, @Body() changePass: NewPassDto) {

    }

    @Get('exit')
    removeToken( @Res() res: any) {

    }

    @Post('reset')
    resetPass( @Res() res: any, @Body() resetPass: ResetPassDto) {

    }

    @Post('resetRequest')
    resetRequest( @Res() res: any, @Body() resetReq: ResetReqDto) {

    }
}