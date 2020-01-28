import { takeLatest, call, put } from 'redux-saga/effects';
import api from '@services/api';

import { todoTypes } from '@store/todos';

function* fetchTodos() {
 try {
   const data = yield call(api.fetchTodos);
   yield put({ type: todoTypes.TodosActionTypes.FETCH_TODOS_SUCCESS, payload: data });
 } catch (error) {
   const { response = {} } = error;
   const { data = {} } = response;
   const { errors = [] } = data;
   yield put({ type: todoTypes.TodosActionTypes.FETCH_TODOS_ERROR, payload: errors });
 }
}

export function* fetchTodosSaga() {
  yield takeLatest(todoTypes.TodosActionTypes.FETCH_TODOS_REQUEST, fetchTodos);
}