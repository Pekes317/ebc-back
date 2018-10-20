export interface CloudinaryUpload { 
  public_id?: string;
  version?: number;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
  url?: string;
  secure_url?: string;
}

export interface UploadImg {
	img: string;
	opts: UploadOpts;
}

export interface UploadOpts {
	upload_preset: string;
	tags: Array<string>;
}