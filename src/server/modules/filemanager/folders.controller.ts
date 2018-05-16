import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Req, Res } from '@nestjs/common';

import { FolderService } from './folder.service';

@Controller('api/manager')
export class FoldersController {

	constructor(private folderService: FolderService) { }

	@Post('folder')
	addFolders(@Res() res: any, @Body() body: any) {
		let dir = this.folderService.addDir(body);
		if (dir.notAdded) {
			res.status(HttpStatus.NO_CONTENT).send({ error: 'Node has not been added' });
		} else if (dir.exist) {
			res.status(HttpStatus.CONFLICT).send({ error: 'Node exists' });
		} else {
			res.status(HttpStatus.CREATED).send(dir);
		}
	}

	@Delete('folder')
	deleteFolders(@Res() res: any, @Query() dir: any) {
		let nodeId = dir.nodeId || '';
		let success = this.folderService.deleteDir(nodeId);
		if (success) {
			res.status(HttpStatus.OK).send(success);
		} else {
			res.status(HttpStatus.CONFLICT).send({ error: 'Directory exists' });
		}	
	}

	@Get('folder')
	getFolders(@Res() res: any, @Query() dir: any) {
		let subNode = dir.nodeId || '';
		let paths = this.folderService.getItems(subNode, false);
		res.status(HttpStatus.OK).send(paths);
	}

	@Put('folder/move')
	moveFolder(@Res() res: any, @Body() data: any) {
		let moved = this.folderService.moveDir(data);

		if (moved.noMove) { 
			res.status(HttpStatus.NO_CONTENT).send({ error:  'Node does not exist' });
		} else {
			res.status(HttpStatus.OK).send(moved);
		}
	}

	@Put('folder')
	updateFolder(@Res() res: any, @Body() node: any) {
		let update = this.folderService.updateDir(node);

		if (update.exist) {
			res.status(HttpStatus.CONFLICT).send({ error: 'Directory already exists' });
		} else if (update.noChange) {
			res.status(HttpStatus.CONFLICT).send({ error: 'Could not change node name' });
		} else if (update.noExist) {
			res.status(HttpStatus.NO_CONTENT).send({ error: 'Node does not exist' });
		} else {
			res.status(HttpStatus.ACCEPTED).send(update);
		}
	}
}