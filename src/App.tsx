import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './App.sass';

import { Header } from '@components/Header';
import { LoginPageContainer } from '@pages/LoginPage';
import { ApplicationState } from '@store';
import { authActions, authSelectors } from '@store/auth';



interface PropsFromDispatch {
  logOut(): void;
}

const App: React.FC<RouteConfig> = ({ route, isAuth }: RouteConfig ) => (
  <div className="main">
    {!isAuth && <LoginPageContainer />}
    <Header />
    <div className="main-container">{renderRoutes(route.routes)}</div>
  </div>
);

// App.default = {
//   route: null,
// };

const mapStateToProps = (state: ApplicationState) => ({
  isAuth: authSelectors.isAuthSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
  return {
    logOut() {
      dispatch(authActions.logOut());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

