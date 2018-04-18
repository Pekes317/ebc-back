import { Body, Controller, Delete, Get, Headers, HttpStatus, Post, Put, Query, Req, Res } from '@nestjs/common';

import { FileService } from './file.service';

@Controller('api/manager')
export class FilesController {

	constructor(private fileService: FileService) { }

	@Post('file')
	addFiles(@Res() res: any, @Req() req: any, @Headers('folderId') folderId: any) {
		let newFile = this.fileService.saveFile(folderId, req);
		newFile.on('end', () => {
			if (this.fileService.fileExist) {
				res.status(HttpStatus.CONFLICT).send({ error: 'Error File already Exist' });
			} else {
				res.status(HttpStatus.CREATED).send(this.fileService.prepareFile(this.fileService.newPath));
			}
		});
	}

	@Delete('file')
	deleteFiles(@Res() res: any, @Query() dir: any) {
		let fileIds = dir.id.split('|') || null;
		let del = this.fileService.delFile(fileIds);
		if (del) {
			res.status(HttpStatus.OK).send({ success:  true }); 
		} else {
			res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ error: 'Not all files were deleted' });
		}
	}

	@Get('file')
	getFiles(@Res() res: any, @Query() dir: any) {
		let subDir = dir.dirId || '';
		let files = this.fileService.getItems(subDir, true);
		res.status(HttpStatus.OK).send(files);
	}

	@Put('file')
	updateFile(@Res() res: any, @Body() data: any) {
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