import * as types from './types';

export const fetchTodos = () => ({
  type: types.TodosActionTypes.FETCH_TODOS_REQUEST,
});

// export const fetchTodos = payload => ({
//   type: ACTION.FETCH_TODOS,
//   payload,
// });

// export const fetchTodos = () => async dispatch => {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
//   dispatch({
//     type: types.FETCH_TODOS,
//     payload: res.data,
//   });
// };

// export type InferTodosTypes<T> = T extends { [key: string]: infer U } ? U : never;
// export type TodosActions<T> = FetchTodosRequestAction | FetchTodosSuccessAction | FetchTodosErrorAction;
