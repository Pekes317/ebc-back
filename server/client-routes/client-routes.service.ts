import { Component } from '@nestjs/common';

@Component()
export class ClientRoutesService {
    constructor() {}

    renderRoute(req: any, res: any) {
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
