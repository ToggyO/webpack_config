import React from 'react';
import { renderRoutes } from 'react-router-config';

import './App.sass';

const App = ({ route }) => {
  return <div>{ renderRoutes(route.routes) }</div>;
};

App.default = {
  route: null,
};

export default { component: App };
