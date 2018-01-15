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
	readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly confirmPassword: string
}