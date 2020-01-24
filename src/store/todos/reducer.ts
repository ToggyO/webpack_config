import { Reducer } from 'redux';

import * as types from './types';


const initialState: types.TodosState = {
    todos: [],
    loading: false,
    errors: [],
};

const reducer: Reducer<types.TodosState> = (state = initialState, action) => {
    switch (action.type) {
        case types.TodosActionTypes.FETCH_TODOS_REQUEST:
            return { ...state, loading: true };
        case types.TodosActionTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.payload };
        case types.TodosActionTypes.FETCH_TODOS_ERROR:
            return { ...state, loading: false, errors: action.payload };
        default:
            return state;
    }
};

export { reducer as todosReducer };