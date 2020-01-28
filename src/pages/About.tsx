import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { helloActions, helloSelectors, helloTypes } from '@store/hello/';
import { ApplicationState } from '@store';


interface PropsFromState {
  hello: helloTypes.HelloState;
}

interface PropsFromDispatch {
  setHello(message: string): void;
}

type AllProps = PropsFromState & PropsFromDispatch;

const About: React.FC<AllProps> = (props) => {
    const { hello, setHello } = props;

    return (
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
        <br />
        {hello}
        <br />
        <button
          type="button"
          onClick={() => setHello('HELLO!')}
        >
          Hello!
        </button>
      </div>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
  hello: helloSelectors.helloSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setHello(message: string) {
    dispatch(helloActions.setHello(message));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
