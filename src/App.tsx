import React from 'react';
import { renderRoutes } from 'react-router-config';

import './App.sass';

// interface IRoutes {
//   default:
// }

const App: React.FC = ({ route }) => {
  return <div>{ renderRoutes(route.routes) }</div>;
  // return <div>{ renderRoutes(route.routes) }</div>;
};

// App.default = {
//   route: null,
// };

export default App;
