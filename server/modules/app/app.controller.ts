import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller()
export class AppController {
    constructor() { }

    @Get()
    root( @Req() req: any, @Res() res: any) {
        res.render('index', {
            req,
            res,
            providers: [{
                provide: 'serverUrl',
                useValue: `${req.protocol}://${req.get('host')}`
            }]
        });
    }
}
