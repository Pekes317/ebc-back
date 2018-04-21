import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';

import { ClientRoutesService } from '../client-routes/client-routes.service';
import { NoAuth } from '../common/auth.decorator';


@Controller()
export class AppController {
    constructor(private readonly client: ClientRoutesService) { }
   
    @NoAuth(true)
    @Get()
    root( @Req() req: any, @Res() res: any) {
        this.client.renderRoute(req, res);
    }
}
