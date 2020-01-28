import * as types from './types';

export const fetchTodos = () => ({
  type: types.TodosActionTypes.FETCH_TODOS_REQUEST,
});
