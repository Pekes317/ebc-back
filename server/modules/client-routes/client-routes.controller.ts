import { Controller, Get, Req, Res } from '@nestjs/common';

import { ClientRoutesService } from './client-routes.service';
import { NoAuth } from '../common/auth.decorator';

@Controller()
export class ClientRoutesController {
    constructor(private readonly client: ClientRoutesService) { }

    @NoAuth(true)
    @Get('back-office/*')
    backOfficeRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }

    @NoAuth(true)
    @Get('card/*')
    cardRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }

    @NoAuth(true)
    @Get('login')
    loginRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }

    @NoAuth(true)
    @Get('resetPass')
    resetPassRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }
}
