import { takeLatest, call, put } from 'redux-saga/effects';
import api from '@services/api';

import { authTypes, authActions } from '@store/auth';


function* login(action: authActions.ActionShape<authTypes.LOGIN_REQUEST, authTypes.LoginData>) {
	try {
		const response = yield call(api.auth.login,action.payload! );
		yield put({ type: authTypes.LOGIN_SUCCESS, payload: response.data });
	} catch (error) {
		const { response = {} } = error;
		const { data = {} } = response;
		const { errors = [] } = data;
		yield put({ type: authTypes.LOGIN_ERROR, payload: errors });
	}
}

export function* loginSaga() {
	yield takeLatest(authTypes.LOGIN_REQUEST, login);
}