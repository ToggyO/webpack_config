import { combineReducers } from 'redux';

import hello from './hello';
import todos from './todo';

export default combineReducers({
   hello,
   todos,
});

