import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res
} from '@nestjs/common';
import { Response } from 'express';

import { Roles } from '../common/roles/roles.decorator';
import { RoleTypes } from '../common/roles/role-types.enum';
import { FolderService } from './folder.service';

@Controller('api/manager')
export class FoldersController {
  constructor(private folderService: FolderService) {}

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Post('folder')
  addFolders(@Res() res: Response, @Body() body: any) {
    let dir = this.folderService.addDir(body);
    if (dir.notAdded) {
      res
        .status(HttpStatus.NO_CONTENT)
        .send({ error: 'Node has not been added' });
    } else if (dir.exist) {
      res.status(HttpStatus.CONFLICT).send({ error: 'Node exists' });
    } else {
      res.status(HttpStatus.CREATED).send(dir);
    }
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Delete('folder')
  deleteFolders(@Res() res: Response, @Query() dir: any) {
    let nodeId = dir.nodeId || '';
    let success = this.folderService.deleteDir(nodeId);
    if (success) {
      res.status(HttpStatus.OK).send(success);
    } else {
      res.status(HttpStatus.CONFLICT).send({ error: 'Directory exists' });
    }
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Get('folder')
  getFolders(@Res() res: Response, @Query() dir: any) {
    let subNode = dir.nodeId || '';
    let paths = this.folderService.getItems(subNode, false);
    res.status(HttpStatus.OK).send(paths);
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Put('folder/move')
  moveFolder(@Res() res: Response, @Body() data: any) {
    let moved = this.folderService.moveDir(data);

    if (moved.noMove) {
      res.status(HttpStatus.NO_CONTENT).send({ error: 'Node does not exist' });
    } else {
      res.status(HttpStatus.OK).send(moved);
    }
  }

  @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Put('folder')
  updateFolder(@Res() res: Response, @Body() node: any) {
    let update = this.folderService.updateDir(node);

    if (update.exist) {
      res
        .status(HttpStatus.CONFLICT)
        .send({ error: 'Directory already exists' });
    } else if (update.noChange) {
      res
        .status(HttpStatus.CONFLICT)
        .send({ error: 'Could not change node name' });
    } else if (update.noExist) {
      res.status(HttpStatus.NO_CONTENT).send({ error: 'Node does not exist' });
    } else {
      res.status(HttpStatus.ACCEPTED).send(update);
    }
  }
}
