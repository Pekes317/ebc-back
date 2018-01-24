import { Body, Controller, Delete, Get, HttpStatus, Post, Param, Put, Res } from '@nestjs/common';
import { object } from '@backand/nodejs-sdk';
import { DbService } from '../db/db.service';

import { GetObjDto, NewItemDto } from './object.dto';

@Controller('api/obj')
export class ObjectController {
    constructor(private readonly dbService: DbService) { }

    @Post(':list')
    createItem( @Res() res: any, @Param() obj: GetObjDto, @Body() newItem: NewItemDto) {
        object.create(obj.list, newItem)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Delete(':list/:id')
    deleteItem( @Res() res: any, @Param() obj: GetObjDto) {
        object.remove(obj.list, obj.id)
            .then(success => res.status(HttpStatus.OK).send(success))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Get(':list/:id')
    getItem( @Res() res: any, @Param() obj: GetObjDto) {
        object.getOne(obj.list, obj.id)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Get(':list')
    getItems( @Res() res: any, @Param() obj: GetObjDto) {
        this.dbService.findAll(obj.list)
            .then(dto => res.status(HttpStatus.OK).send(dto))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
        // object.getList(obj.name)
        //     .then(dto => res.status(HttpStatus.OK).send(dto.data))
        //     .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }

    @Put(':list/:id')
    updateItem( @Res() res: any, @Param() obj: GetObjDto, @Body() newItem: NewItemDto) {
        object.update(obj.list, obj.id, newItem)
            .then(dto => res.status(HttpStatus.OK).send(dto.data))
            .catch(err => res.status(HttpStatus.UNAUTHORIZED).send(err));
    }
}
