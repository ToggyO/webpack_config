import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { connect } from 'react-redux';

import './App.sass';

import { Header } from '@components/Header';
import { LoginPageContainer } from '@pages/LoginPage';
import { ApplicationState } from '@store';
import { authSelectors } from '@store/auth';

interface PropsFromState {
  isAuth: boolean;
}

type AllProps = RouteConfig & PropsFromState;

const App: React.FC<AllProps> = ({ route, isAuth }: AllProps ) => (
  <div className="main">
    <LoginPageContainer isAuth={isAuth} />
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

// const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
//   return {
//     toggleIsAuth() {
//       dispatch(authActions.toggleIsAuth());
//     },
//   };
// };

export default connect(
  mapStateToProps,
  null,
)(App);

