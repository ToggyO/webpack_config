import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import Routes from './Routes';
import { store } from './store';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          { renderRoutes(Routes) }
        </div>
      </BrowserRouter>
    </Provider>
    ,rootElement);
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        { renderRoutes(Routes) }
      </div>
    </BrowserRouter>
  </Provider>
  ,rootElement);
