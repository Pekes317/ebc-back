import { Injectable } from '@nestjs/common';
import { auth } from 'firebase-admin';
import { readFileSync } from 'fs';
import * as cloudinary from 'cloudinary';

import { appDir } from '../common/base-path';
import { CloudinaryUpload, UploadImg } from '../models/upload-img.model';

const ebcCloud = require('./cloudinary.json');
const basePath: string = `${appDir()}/views/`;

@Injectable()
export class ImgUploadService {
  constructor() {}

  async addImg(upload: UploadImg) {
    try {
      const newImg: CloudinaryUpload = await this.uploadImg(upload);
      return newImg;
    } catch (error) {
      throw error;
    }
  }

  async getFileContents(url: string) {
    let filePath = url.substr(url.indexOf('assets'));
    let contents = await readFileSync(basePath + filePath);
    return String(contents);
  }

  async setTags(img: UploadImg, uid: string) {
    const userRecord: auth.UserRecord = await auth().getUser(uid);
    const tags: Array<string> = [...img.opts.tags, userRecord.displayName];
    const imgUpload: UploadImg = { ...img, opts: { ...img.opts, tags } };
    return imgUpload;
  }

  async updateProfile(img: UploadImg, uid: string) {
    try {
      const imgUpload: UploadImg = await this.setTags(img, uid);
      const newImg: CloudinaryUpload = await this.uploadImg(imgUpload);
      const profile: auth.UserRecord = await auth().updateUser(uid, {
        photoURL: newImg.secure_url
      });
      return profile;
    } catch (error) {
      throw error;
    }
  }

  uploadImg(upload: UploadImg) {
    cloudinary.config(ebcCloud);
    return new Promise((reject, resolve) => {
      cloudinary.v2.uploader.upload(
        upload.img,
        upload.opts,
        (err, res: CloudinaryUpload) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  }
}
