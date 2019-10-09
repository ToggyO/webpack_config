import { hot } from 'react-hot-loader';
import React from 'react';

import { renderRoutes } from 'react-router-config';

import './App.sass';

const App = ({ route }) => {
  return <div>{ renderRoutes(route.routes) }</div>;
};

App.default = {
  route: null,
};

export default hot(module)({ component: App });
