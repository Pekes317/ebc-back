import { ItemDto } from '../object/object.dto';
import { UploadImg } from '../models/upload-img.model';

export class TypeDto {
	readonly type: string;
}

export class DeviceDto {
	readonly token: string;
}

export class ItemImgDto {
	readonly item: ItemDto;
	readonly picture: UploadImg;
}