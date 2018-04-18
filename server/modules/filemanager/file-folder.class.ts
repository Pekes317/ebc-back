import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { Dimensions, Directory, File } from './filemanager.types';
import { lookup } from 'mime-types';
import * as sizeOf from 'image-size';

export class FileFolderService {

	baseDir: string = '../../../dist/views/assets/svg/';
	basePath: string = `${__dirname}/${this.baseDir}`;

	constructor() { }

	public getItems(subNode: string, file: boolean) {
		let folders: Array<Directory> = [];
		let files: Array<File> = [];
		let items = readdirSync(this.basePath + subNode);

		items.forEach(item => {
			let stat = statSync(`${this.basePath}${subNode}/${item}`);

			if (stat && stat.isDirectory()) {
				folders.push(this.prepareDir(item, subNode));
			}

			if (stat && stat.isFile()) {
				let file = join(subNode, item);
				files.push(this.prepareFile(file));
			}
		});

		if (file) {
			return files;
		}

		return folders
	}

	public isDirectory(path: string): boolean {
		try {
			let dir = statSync(this.basePath + path);
			return dir && dir.isDirectory();
		} catch {
			return false
		}
	}

	public isFile(path: string): boolean {
		try {
			let file = statSync(this.basePath + path);
			return file && file.isFile();
		} catch {
			return false
		}
	}

	public prepareDir(name: string, subNode: string): Directory {
		return {
			id: `${subNode}/${name}`,
			parentId: subNode || null,
			name: name,
			children: []
		};
	}

	public prepareFile(filePath: string): File {
		let src = join('/uploads', filePath).replace(/ /g, '\\ ');
		let mimeType = lookup(filePath);
		let isImage = false;
		let dimensions: Dimensions;
		let dirs = filePath.split('/');
		let name = dirs.pop();

		if (mimeType) {
			isImage = mimeType.indexOf('image') === 0;
		}

		if (isImage) {
			dimensions = sizeOf(join(this.basePath, filePath))
		}

		return {
			id: filePath,
			folderId: dirs.join('/'),
			name: name,
			thumbnailUrl: src,
			url: src,
			type: mimeType,
			width: isImage ? dimensions.width : 0,
			height: isImage ? dimensions.height : 0
		};
	}
}