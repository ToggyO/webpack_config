import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import todosReducer, { todoTypes } from '@store/todos';
import helloReducer, { helloTypes } from '@store/hello';


export interface ApplicationState {
	todos: todoTypes.TodosState;
	hello: helloTypes.HelloState;
}

const reducers = combineReducers({
	todos: todosReducer,
	hello: helloReducer,
});

const middlewares = [thunk];

const store = createStore(
	reducers,
	undefined,
	composeWithDevTools(applyMiddleware(...middlewares)),
);

export { store };
