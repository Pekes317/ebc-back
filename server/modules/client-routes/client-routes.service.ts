import { Component, Res, Req } from '@nestjs/common';

@Component()
export class ClientRoutesService {
    constructor() { }

    renderRoute(@Res() req: any, @Req() res: any) {
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
