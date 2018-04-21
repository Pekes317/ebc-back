import { Component, Res, Req } from '@nestjs/common';
import { renderModuleFactory } from '@angular/platform-server'

const dist = `${process.cwd()}/dist`;
const { AppServerModuleNgFactory } = require(`${dist}/public/main`);

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
