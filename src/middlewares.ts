/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { authTypes } from '@store/auth';
import { writeToLocalState } from '@services/ls';
import { LOCAL_STORAGE_KEYS } from '@config';
import { Middleware } from 'redux';


export const saveUserData: Middleware = () => next => action => {
	switch (action.type) {
		case authTypes.LOGIN_SUCCESS: {
			const { user, token, registrationStep } = action.payload;
			const { accessToken, refreshToken } = token;
			writeToLocalState<authTypes.User>(LOCAL_STORAGE_KEYS.USER, user);
			writeToLocalState<string>(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
			writeToLocalState<string>(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
			writeToLocalState<authTypes.RegistrationStep>(LOCAL_STORAGE_KEYS.REGISTER_STEP, registrationStep);
			break;
		}
		default:
			break;
	}
	return next(action);
};