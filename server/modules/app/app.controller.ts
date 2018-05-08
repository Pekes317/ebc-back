import { Controller, Get, Next, Req, Res } from '@nestjs/common';

import { NoAuth } from '../common/auth.decorator';
import { resolve } from 'dns';

@Controller('*')
export class AppController {
    constructor() { }

    @NoAuth(true)
    @Get()
    root(@Req() req: any, @Res() res: any, @Next() next: any) {
        if (!req.originalUrl.startsWith('/api')) {
            res.render('index', {
                req,
                res,
                providers: [{
                    provide: 'serverUrl',
                    useValue: `${req.protocol}://${req.get('host')}`
                }]
            });
        } else {
            next()
        }
    }
}
