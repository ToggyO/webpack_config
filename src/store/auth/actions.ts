import * as types from './types';

export interface ActionShape<T, U> {
	type: T;
	payload?: U;
}

export const login = (data: types.LoginData): ActionShape<types.LOGIN_REQUEST, types.LoginData> => ({
	type: types.LOGIN_REQUEST,
	payload: data,
});

export const logOut = (): ActionShape<types.LOG_OUT, null> => ({
	type: types.LOG_OUT,
});

