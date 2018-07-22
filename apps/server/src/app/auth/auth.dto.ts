export class UserDto {
	readonly disabled: boolean;
	readonly displayName: string;
	readonly email: string;
	readonly emailVerified: boolean;
	readonly password: string;
	readonly photoUrl: string;
}

export class RoleDto {
	readonly uid: string;
	readonly role: string;
}