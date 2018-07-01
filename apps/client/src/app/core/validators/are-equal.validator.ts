import { FormGroup, Validator, ValidatorFn } from '@angular/forms';

export class AreEqualValidator implements Validator {
	validate: ValidatorFn;

	constructor() { }

	static validate(g: FormGroup): { [key: string]: any } {
		let equal = g.value;
		const vals = Object.keys(equal).map(key => equal[key]);
		if (vals[0] !== vals[1]) {
			return { notEqual: true };
		} else {
			return null;
		}
	}
}