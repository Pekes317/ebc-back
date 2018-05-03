import { Component } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

@Component()
export class ImgUploadService {
	ebcCloud = {
		cloud_name: 'ebccloud',
		api_key: '383232894147658',
		api_secret: 'JfhdN-ova6QoO0NStnXGlpaD3II'
	};

	constructor() { }

	async addSign(upload: any) {
		let newImg = {};
		cloudinary.config(this.ebcCloud);
		await cloudinary.v2.uploader.upload(upload.img, upload.opts, (err, cloud) => {
			newImg = cloud;
			if (err) {
				newImg = err;
			}
		});

		return newImg;
	}
}