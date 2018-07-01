import { Body, Controller, Delete, Get, HttpStatus, Post, Param, Put, Res, UseInterceptors } from '@nestjs/common';
import { DbService } from '../db/db.service';

import { GetObjDto, NewItemDto } from './object.dto';
import { SlackInterceptor } from '../common/slack.interecptor';

@Controller('api/obj')
export class ObjectController {
    constructor(private readonly dbService: DbService) { }

    @UseInterceptors(SlackInterceptor)
    @Post(':list')
    createItem(@Res() res: any, @Param() obj: GetObjDto, @Body() newItem: NewItemDto) {
        this.dbService.setTable(obj.list)
            .then(service => this.dbService.createOne(service, newItem)
                .then(dto => res.status(HttpStatus.CREATED).send(dto))
                .catch(err => res.status(HttpStatus.NOT_FOUND).send(err)))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }

    @UseInterceptors(SlackInterceptor)
    @Delete(':list/:id')
    deleteItem(@Res() res: any, @Param() obj: GetObjDto) {
        this.dbService.setTable(obj.list)
            .then(service => this.dbService.deleteOne(service, obj.id)
                .then(dto => res.status(HttpStatus.OK).send(dto))
                .catch(err => res.status(HttpStatus.NOT_FOUND).send(err)))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }

    @Get(':list/:id')
    getItem(@Res() res: any, @Param() obj: GetObjDto) {
        this.dbService.setTable(obj.list)
            .then(service => this.dbService.getOne(service, obj.id)
                .then(dto => res.status(HttpStatus.OK).send(dto))
                .catch(err => res.status(HttpStatus.NOT_FOUND).send(err)))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }

    @Get(':list')
    getItems(@Res() res: any, @Param() obj: GetObjDto) {
        this.dbService.setTable(obj.list)
            .then(service => this.dbService.getAll(service)
                .then(dto => res.status(HttpStatus.OK).send(dto))
                .catch(err => res.status(HttpStatus.NOT_FOUND).send(err)))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }

    @UseInterceptors(SlackInterceptor)
    @Put(':list/:id')
    updateItem(@Res() res: any, @Param() obj: GetObjDto, @Body() newItem: NewItemDto) {
        this.dbService.setTable(obj.list)
            .then(service => this.dbService.updateOne(service, obj.id, newItem)
                .then(dto => res.status(HttpStatus.OK).send(dto))
                .catch(err => res.status(HttpStatus.NOT_FOUND).send(err)))
            .catch(err => res.status(HttpStatus.BAD_REQUEST).send(err));
    }
}
