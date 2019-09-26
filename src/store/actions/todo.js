import axios from 'axios';
import { ACTION } from './types';

// export const fetchTodos = payload => ({
//   type: ACTION.FETCH_TODOS,
//   payload,
// });

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch({
    type: ACTION.FETCH_TODOS,
    payload: res.data,
  });
};

// export const fetchTodos = () => async dispatch => {
//   const res = await axios.get('https://magora-react-university-api.herokuapp.com/categories');
//   dispatch({
//     type: ACTION.FETCH_TODOS,
//     payload: res.data,
//   });
// };
