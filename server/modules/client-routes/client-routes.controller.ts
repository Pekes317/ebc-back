import { Controller, Get, Req, Res } from '@nestjs/common';

import { ClientRoutesService } from './client-routes.service';

@Controller()
export class ClientRoutesController {
    constructor(private readonly client: ClientRoutesService) { }

    @Get('back-office/*')
    backOfficeRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }

    @Get('card/*')
    cardRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }

    @Get('login')
    loginRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }

    @Get('resetPass')
    resetPassRoute(@Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }
}
