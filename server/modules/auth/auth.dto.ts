export class NewPassDto {
	readonly oldPassword: string;
	readonly newPassword: string;
}

export class ResetPassDto {
	readonly resetToken: string;
	readonly newPassword: string;
}

export class ResetReqDto {
	readonly appName: string;
	readonly username: string;
}

export class SignInDto {
	readonly username: string;
	readonly password: string;
}

export class SignUpDto {
	readonly disabled: boolean;
	readonly displayName: string;
	readonly email: string;
	readonly emailVerified: boolean;
	readonly password: string;
	readonly photoUrl: string;
}