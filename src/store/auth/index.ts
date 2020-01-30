import { authReducer } from './reducer';

import * as authTypes from './types';
import * as authActions from './actions';
import * as authSelectors from './selectors';
import * as authSagas from './sagas';

export {
  authTypes,
	authActions,
	authSelectors,
	authSagas,
};
export default authReducer;