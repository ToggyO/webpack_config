import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = [thunk];

// const composeEnhancers =
//   typeof window !== 'undefined'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// взятие html из store при обновлении страницы
// eslint-disable-next-line no-unused-vars
// let state;
// if (typeof window !== 'undefined') {
//   // eslint-disable-next-line no-underscore-dangle
//   state = window.__PRELOADED_STATE__;
//   // eslint-disable-next-line no-underscore-dangle
//   delete window.__PRELOADED_STATE__;
// }

const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(...middleware)),
);

export { store };
