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
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	pic: string;
	since: Date;
	subscribed: boolean;
	items?: any;
	products?: any;
	devices?: any;
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
	emailVerified: boolean;
	disabled: boolean;
	// firstName: string;
	// lastName: string;
	// password: string;
	// confirmPassword: string;
}