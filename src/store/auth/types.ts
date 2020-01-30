// Login actions
import { ErrorResponse } from '@config';

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export type LOGIN_REQUEST = typeof LOGIN_REQUEST;

export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export const LOGIN_ERROR = 'auth/LOGIN_ERROR';
export type LOGIN_ERROR = typeof LOGIN_ERROR;

export const LOG_OUT = 'auth/LOG_OUT';
export type LOG_OUT = typeof LOG_OUT;

export interface User {
	id: string;
	name: string;
	email: string;
	uiTheme: string;
	signUpBy: string;
	avatar: UserAvatar | null;
}

export interface UserAvatar {
	resourceId: string;
	originalUrl: string;
	formatUrls: {
		[key: string]: string;
	};
}

export interface RegistrationStep {
	stepName: string;
	step: number;
	statusName: string;
	status: number;
}

export interface AuthToken {
	accessToken: string;
	accessTokenExpire?: Date;
	refreshToken: string;
	refreshTokenExpire?: Date;
}

export interface UserData {
	user: User;
	registrationStep: RegistrationStep;
	token: AuthToken;
}

export interface AuthState {
	data: UserData | {};
	isAuth: boolean;
	loading: boolean;
	errors: ErrorResponse[];
}

export interface LoginData {
	email: string;
	password: string;
}

export interface LoginResponse {
	data: UserData;
	code: string;
}
