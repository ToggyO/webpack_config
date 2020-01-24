import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import axios from 'axios';

import * as types from './types';

export const fetchTodosThunk = (): ThunkAction<void, {}, {}, Action<string>> =>
	async (dispatch: ThunkDispatch<{}, {}, Action<string>>): Promise<Action> => {
		try {
			const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
			return dispatch({
				type: typeof types.TodosActionTypes.FETCH_TODOS_SUCCESS,
				payload: res.data,
			});
		} catch (e) {
			return dispatch({
				type: typeof types.TodosActionTypes.FETCH_TODOS_ERROR,
				payload: e,
			});
		}
	};