import { Injectable } from '@nestjs/common';
import { mkdirSync, readdirSync, renameSync, rmdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import { lookup } from 'mime-types';
import { IncomingForm } from 'formidable';
import { crop } from 'easyimage';
import * as sizeOf from 'image-size';

import { Dimensions, Directory, File, FileUpdate } from './filemanager.types';
import { FileFolderService } from './file-folder.class';

@Injectable()
export class FolderService extends FileFolderService {

	constructor() {
		super();
	}

	public addDir(data) {
		var node = data.node;
		var parentFolderId = data.parentNodeId || '';
		var newNodeId = `${parentFolderId}/${node.name}`;

		if (!this.isDirectory(newNodeId)) {
			mkdirSync(this.basePath + newNodeId);

			if (this.isDirectory(newNodeId)) {
				return {
					id: newNodeId,
					name: node.name,
					parentId: parentFolderId || null,
					children: []
				};
			}
			return { notAdded: true };

		} 
		
		return { exist: true };
	}

	public deleteDir(nodeId) {
		if (this.isDirectory(nodeId)) {
			rmdirSync(this.basePath + nodeId);
			return { success: !this.isDirectory(nodeId) };
		}
		return false;
	}

	public moveDir(data) {
		console.log(data);

		if (data.target === null) {
			data.target = '';
		}

		if (this.isDirectory(data.source) && this.isDirectory(data.target)) {
			let subNodes = data.source.split('/');
			let dirName = subNodes[subNodes.length - 1];
			let newNodeName = data.target + '/' + dirName;

			renameSync(this.basePath + data.source, this.basePath + newNodeName);

			return {
				id: newNodeName,
				name: dirName,
				parentId: data.target,
				children: []
			};
		}
		return { noMove: true };
	}

	public updateDir(node) {
		if (this.isDirectory(node.id)) {
			let subNodes = node.id.split('/');
			subNodes[subNodes.length - 1] = node.name;
			let newNodeName = subNodes.join('/');

			if (this.isDirectory(newNodeName)) {
				return { exist: true };
			}

			renameSync(this.basePath + node.id, this.basePath + newNodeName);

			if (this.isDirectory(newNodeName)) {
				node.id = newNodeName;
				return node;
			}
			return { noChange: true };
		}

		return { noExist: true };
	}
}