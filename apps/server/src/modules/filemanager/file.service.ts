import { Injectable } from '@nestjs/common';
import { readdirSync, renameSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import { lookup } from 'mime-types';
import { IncomingForm } from 'formidable';
import { crop } from 'easyimage';
import * as sizeOf from 'image-size';

import { Dimensions, Directory, File, FileUpdate } from './filemanager.types';
import { FileFolderService } from './file-folder.class';

@Injectable()
export class FileService extends FileFolderService {

	fileExist: boolean = false;
	newPath: string = '';

	constructor() {
		super();
	}

	public delFile(files: Array<string>) {
		let allFilesDeleted = true;

		files.forEach(fileId => {
			if (this.isFile(fileId)) {
				unlinkSync(join(this.basePath, fileId));
			} else {
				allFilesDeleted = false;
			}
		});

		return allFilesDeleted;
	}

	public fileSaved(fileRtn) {
		return fileRtn;
	}

	public saveFile(folderId, req) {
		let fileExist: boolean = false;
		let form = new IncomingForm();
		let newPath = '';

		form.multiples = true;
		form.uploadDir = this.basePath;

		form.on('file', (field, file) => {
			this.newPath = this.checkFile(file, folderId);
		});

		form.on('error', err => {
			console.log(`An error has occured: \n ${err}`);
		});

		form.parse(req);

		return form;
	}

	public updateFile(oldFile: FileUpdate) {

		// Move file
		if (oldFile.folderId !== null && oldFile.files !== null) {
			oldFile.files.forEach(file => {
				const fileName = file.split('/').pop();
				renameSync(this.basePath + file, `${this.basePath + oldFile.folderId}/${fileName}`);
			});

			return this.getItems(oldFile.folderId, true);
		}

		// crop file
		if (this.isFile(oldFile.folderId)) {
			if (oldFile.bounds) {
				let src = join(this.basePath, oldFile.fileId);
				crop({
					src: src,
					dst: src,
					cropWidth: oldFile.bounds.width,
					cropHeight: oldFile.bounds.height,
					y: oldFile.bounds.y,
					x: oldFile.bounds.x,
					gravity: 'NorthWest'
				});
				return this.prepareFile(oldFile.fileId);
			}
		}
		return false;
	}

	private checkFile(file, folder) {
		let path = ''
		file.name = file.name.replace(/[^A-Za-z0-9\-\._]/g, '');

		if (folder) {
			path = join(folder, file.name);
		} else {
			path = file.name;
		}

		if (this.isFile(path)) {
			this.fileExist = true;
			unlinkSync(file.path);
		} else {
			renameSync(file.path, this.basePath + path);

			return path;
		}
	}
}