import { User } from './user.model';

export interface UserSignup extends User {
	password: string;
	emailVerified?: boolean;
	disabled?: boolean;
	confirmPassword: string;
}