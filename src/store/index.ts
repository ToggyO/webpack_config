import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import { saveUserData } from '../middlewares';

import todosReducer, { todoTypes, todoSagas } from '@store/todos';
import helloReducer, { helloTypes } from '@store/hello';
import authReducer, { authTypes, authSagas } from '@store/auth';


export interface ApplicationState {
	todos: todoTypes.TodosState;
	hello: helloTypes.HelloState;
	auth: authTypes.AuthState;
}

function configureStore() {
	const reducers = combineReducers({
		todos: todosReducer,
		hello: helloReducer,
		auth: authReducer,
	});
	const sagas = {
		...todoSagas,
		...authSagas,
	};
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [
		sagaMiddleware,
		saveUserData,
	];
	const store = createStore(
		reducers,
		undefined,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);
	Object.values(sagas).forEach((saga: any) => sagaMiddleware.run(saga));
	return store;
}

export const store = configureStore();



