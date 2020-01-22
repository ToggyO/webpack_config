import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setHello } from '../store/actions/hello';

const About = (props) => {
    const { hello, helloSet } = props;

    return (
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
        <br />
        {hello}
        <br />
        <button
          type="button"
          onClick={() => helloSet('HELLO!')}
        >
          Hello!
        </button>
      </div>
    );
};

const mapStateToProps = ({ hello }) => ({ hello });

const mapDispatchToProps = (dispatch) => ({
    helloSet: bindActionCreators(setHello, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
