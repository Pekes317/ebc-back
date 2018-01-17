import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { changePassword, resetPassword, requestResetPassword, signin, signout, signup } from '@backand/nodejs-sdk';

import { NewPassDto, ResetPassDto, ResetReqDto, SignInDto, SignUpDto } from './auth.dto';

@Controller('api/auth')
export class AuthController {
    constructor() { }

    @Post('token')
    addToken( @Res() res: any, @Body() creds: SignInDto) {
        signin(creds.username, creds.password)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Post('signup')
    createUser( @Res() res: any, @Body() newUser: SignUpDto) {
        signup(newUser.firstName, newUser.lastName, newUser.email, newUser.password, newUser.confirmPassword)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Post('newPass')
    newPassword( @Res() res: any, @Body() changePass: NewPassDto) {
        changePassword(changePass.oldPassword, changePass.newPassword)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Get('exit')
    removeToken( @Res() res: any) {
        signout()
            .then(success => res.status(HttpStatus.OK).send(success))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Post('reset')
    resetPass( @Res() res: any, @Body() resetPass: ResetPassDto) {
        resetPassword(resetPass.resetToken, resetPass.newPassword)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Post('resetRequest')
    resetRequest( @Res() res: any, @Body() resetReq: ResetReqDto) {
        requestResetPassword(resetReq.appName, resetReq.username)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }
}