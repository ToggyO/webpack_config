import { Reducer } from 'redux';

import { getFromLocalState } from '@services/ls';
import { LOCAL_STORAGE_KEYS } from '@config';
import { checkTokens } from '@services/auth';
import * as types from './types';


const initialState: types.AuthState = {
	data: {
		user: getFromLocalState(LOCAL_STORAGE_KEYS.USER) || {},
		token: {
			accessToken:
				getFromLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
			refreshToken:
				getFromLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN),
		},
		registrationStep: getFromLocalState(LOCAL_STORAGE_KEYS.REGISTER_STEP) || { step: 0, stepName: '' },
	},
	isAuth: checkTokens(),
	loading: false,
	errors: [],
};

const reducer: Reducer<types.AuthState> = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_REQUEST:
			return { ...state, loading: true };
		case types.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				isAuth: true,
				data: action.payload,
			};
		case types.LOG_OUT:
			return {
				...state,
				isAuth: false,
			};
		case types.LOGIN_ERROR:
			return { ...state, loading: false, errors: action.payload };
		default:
			return state;
	}
};

export { reducer as authReducer };