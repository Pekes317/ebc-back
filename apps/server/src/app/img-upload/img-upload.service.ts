import { Component } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as cloudinary from 'cloudinary';
import { appDir } from '../common/base-path';

const ebcCloud = require('./cloudinary.json');
const basePath: string = `${appDir()}/views/`;

@Component()
export class ImgUploadService {

	constructor() { }

	async addSign(upload: any) {
		let newImg = {};
		cloudinary.config(ebcCloud);
		await cloudinary.v2.uploader.upload(upload.img, upload.opts, (err, cloud) => {
			newImg = cloud;
			if (err) {
				newImg = err;
			}
		});

		return newImg;
	}

	async getFileContents(url: string) {
		let filePath = url.substr(url.indexOf('assets'));
		let contents = await readFileSync(basePath + filePath);
		return String(contents);
	}
}