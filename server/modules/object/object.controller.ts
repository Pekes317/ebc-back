import { Body, Controller, Delete, Get, HttpStatus, Post, Param, Put, Res } from '@nestjs/common';
import { object } from '@backand/nodejs-sdk';

import { GetObjDto, NewItemDto } from './object.dto';

@Controller('api/obj')
export class ObjectController {
    constructor() { }

    @Post(':list')
    createItem( @Res() res: any, @Param() obj: GetObjDto, @Body() newItem: NewItemDto) {
        object.create(obj.name, newItem)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Delete(':list/:id')
    deleteItem( @Res() res: any, @Param() obj: GetObjDto) {
        object.remove(obj.name, obj.id)
            .then(success => res.status(HttpStatus.OK).send(success))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Get(':list/:id')
    getItem( @Res() res: any, @Param() obj: GetObjDto) {
        object.getOne(obj.name, obj.id)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }
    
    @Get(':list')
    getItems( @Res() res: any, @Param() obj: GetObjDto) {
        object.getList(obj.name)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Put(':list/:id')
    updateItem( @Res() res: any, @Param() obj: GetObjDto, @Body() newItem: NewItemDto) {
        object.update(obj.name, obj.id, newItem)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }
}
