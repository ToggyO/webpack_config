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
        <Link className="hover:text-white" to="/">Home</Link>
        <br />
        {hello}
        <br />
        <input
          type="text"
          className="bg-gray-200 focus:bg-white hover:bg-white border-transparent rounded mx-2 my-2 py-2 px-2 focus:outline-none focus:shadow-outline"
          placeholder="Focus me"
        />
        <button
          type="button"
          className="bg-yellow-500 xl:bg-blue-500 md:bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-2 rounded"
          onClick={() => helloSet('HELLO!')}
        >
          Hello!
        </button>
        <button
          type="button"
          className="bg-yellow-500 xl:active:bg-blue-700 xl:hover:bg-red-700 text-black font-bold py-2 px-4 mx-2 my-2 rounded"
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

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(About),
};
