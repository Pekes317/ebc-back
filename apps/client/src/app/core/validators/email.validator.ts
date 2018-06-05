import { FormControl, Validator, ValidatorFn } from '@angular/forms';

export class EmailValidator implements Validator {
	validate: ValidatorFn;

	constructor() { }

	static validate(c: FormControl): { [key: string]: any } {
		let addy = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let isEmail = !addy.test(c.value);
		return isEmail ? { 'invalidEmail': true } : null;
	}
}