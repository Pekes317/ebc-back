import { Controller, Get, Req, Res } from '@nestjs/common';

import { ClientRoutesService } from '../client-routes/client-routes.service';

@Controller()
export class AppController {
    constructor(private readonly client: ClientRoutesService) { }

    @Get()
    root( @Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }
}
