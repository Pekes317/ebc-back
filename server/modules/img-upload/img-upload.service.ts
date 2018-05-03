import { Component } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

const ebcCloud = require('./cloudinary.json');

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
}