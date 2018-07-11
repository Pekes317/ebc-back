import { ModalTypes } from '../../../state/item-store/services/items-types.enum';

export interface ItemDialogModel {
	edit: boolean;
	ebcItem: ModalTypes;
	type: string;
}