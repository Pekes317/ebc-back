import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpStatus,
  Post,
  Put,
  Query,
  Req,
  Res
} from '@nestjs/common';
import { Response } from 'express';

import { NoAuth } from '../common/auth.decorator';
import { Roles } from '../common/roles/roles.decorator';
import { RoleTypes } from '../common/roles/role-types.enum';
import { FileService } from './file.service';
import { ExtRequest } from '../models/ext-req.model';

@Controller('api/manager')
export class FilesController {
  constructor(private fileService: FileService) {}
  
  @NoAuth(true)
	// @Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Post('file')
  addFiles(
    @Res() res: Response,
    @Req() req: ExtRequest,
    @Headers('folderId') folderId: any
  ) {
    let newFile = this.fileService.saveFile(folderId, req);
    newFile.on('end', () => {
      if (this.fileService.fileExist) {
        res
          .status(HttpStatus.CONFLICT)
          .send({ error: 'Error File already Exist' });
      } else {
        res
          .status(HttpStatus.CREATED)
          .send(this.fileService.prepareFile(this.fileService.newPath));
      }
    });
  }
	
	@Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Delete('file')
  deleteFiles(@Res() res: Response, @Query() dir: any) {
    let fileIds = dir.id.split('|') || null;
    let del = this.fileService.delFile(fileIds);
    if (del) {
      res.status(HttpStatus.OK).send({ success: true });
    } else {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send({ error: 'Not all files were deleted' });
    }
  }
	
	@Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Get('file')
  getFiles(@Res() res: Response, @Query() dir: any) {
    let subDir = dir.dirId || '';
    let files = this.fileService.getItems(subDir, true);
    res.status(HttpStatus.OK).send(files);
	}
	
	@Roles(RoleTypes.admin, RoleTypes.owner, RoleTypes.member)
  @Put('file')
  updateFile(@Res() res: Response, @Body() data: any) {
    let oldFile = {
      fileId: data.id || null,
      bounds: data.bounds || null,
      files: data.files || null,
      folderId: data.folderId || ''
    };
    let updatedFile = this.fileService.updateFile(oldFile);
    if (updatedFile === false) {
      res.status(HttpStatus.NO_CONTENT).send({ error: 'File does not exist' });
    } else {
      res.status(HttpStatus.ACCEPTED).send(updatedFile);
    }
  }
}
