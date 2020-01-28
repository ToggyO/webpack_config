import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import todosReducer, { todoTypes, todoSagas } from '@store/todos';
import helloReducer, { helloTypes } from '@store/hello';


export interface ApplicationState {
	todos: todoTypes.TodosState;
	hello: helloTypes.HelloState;
}

function configureStore() {
	const reducers = combineReducers({
		todos: todosReducer,
		hello: helloReducer,
	});
	const sagas = {
		...todoSagas,
	};
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const store = createStore(
		reducers,
		undefined,
		composeWithDevTools(applyMiddleware(...middlewares)),
	);
	Object.values(sagas).forEach((saga: any) => sagaMiddleware.run(saga));
	return store;
}

export const store = configureStore();



