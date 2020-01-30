// gist https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Token } from 'path-to-regexp';


// import { authTypes } from '@ducks/auth/';
import {
	LOCAL_STORAGE_KEYS,
	ErrorResponse,
	ERROR_CODES,
	API_URL,
} from '@config';
import { getFromLocalState, writeToLocalState } from '@services/ls';
// import { userLogout } from '@services/auth';
// import { store } from '@store';


type Headers = { [key: string]: string } & { Authorization?: Token }
let isAlreadyFetchingAccessToken = false;
let subscribers: any = [];

function onAccessTokenFetched(accesstoken: Token) {
	subscribers = subscribers.filter((callback: Function) => callback(accesstoken));
}

function addSubscriber(callback: Function) {
	subscribers.push(callback);
}

const superaxios = axios.create({
	baseURL: 'https://squad.api.magora.work/api/v0.1',
	// baseURL: `${API_DOMAIN}/api/${API_VERSION}`,
}) as AxiosInstance;

superaxios.interceptors.request.use((config: AxiosRequestConfig) => {
	const accessToken = getFromLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

	const headers: Headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	};

	if (accessToken) {
		headers.Authorization = config.headers.Authorization || `Bearer ${accessToken}`;
	}
	return {
		...config,
		headers,
	};
});


superaxios.interceptors.response.use(
	response => response,
	error => {
		const { config, response } = error;
		const originalRequest = config;

		if (response.status === 401) {
			const { data = {} } = response;
			const { errors } = data;
			if (errors
				.filter((item: ErrorResponse) =>
					item.code === ERROR_CODES.ACCESS_TOKEN_EXPIRED).length > 0) {
				if (!isAlreadyFetchingAccessToken) {
					isAlreadyFetchingAccessToken = true;
					const oldRefreshToken = `${getFromLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN)}`;
					// store.dispatch({ type: authTypes.REFRESHING_TOKEN_REQUEST });
					superaxios
						.put(API_URL.GET_TODOS, { refreshToken: oldRefreshToken })
						// .put(API_URL.AUTH.REFRESH_TOKEN, { refreshToken: oldRefreshToken })
						// eslint-disable-next-line no-shadow
						.then(response => {
							// store.dispatch({ type: authTypes.REFRESHING_TOKEN_SUCCESS });
							const { accessToken, refreshToken } = response.data.data;
							writeToLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
							writeToLocalState(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
							isAlreadyFetchingAccessToken = false;
							onAccessTokenFetched(accessToken);
						})
						.catch(() => {
							// store.dispatch({ type: authTypes.REFRESHING_TOKEN_ERROR });
							// store.dispatch({ type: authTypes.LOGOUT });
						});
				}

				const retryOriginalRequest = new Promise(resolve => {
					addSubscriber((accessToken: Token) => {
						originalRequest.headers.Authorization = `Bearer ${accessToken}`;
						resolve(superaxios(originalRequest));
					});
				});
				return retryOriginalRequest;
			}
		}
		return Promise.reject(error);
	});

export default superaxios;