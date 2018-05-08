export interface BackandHeader {
	header_name: string;
	header_value: string;
}

export interface BackandUrls {
	signup: string;
	token: string;
	requestResetPassword: string;
	resetPassword: string;
	changePassword: string;
	socialLoginWithCode: string;
	socialSignupWithCode: string;
	socialLoginWithToken: string;
}

export interface BackandUser {
	email: string;
	displayName: string;
	photoUrl: string;
}

export interface BackandItem {
	id: number;
	name: string;
	desc: string;
	media: string;
	pic: string;
	flyer: boolean;
	ready: boolean;
	disable: boolean;
	data?: string;
	clients?: any;
	user?: any;
}

export interface SignupData {
	email: string;
	displayName: string;
	password: string;
	photoUrl: string;
	emailVerified?: boolean;
	disabled?: boolean;
	// confirmPassword: string;
}