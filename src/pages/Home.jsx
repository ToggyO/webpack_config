import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about" className="test-class">About</Link>
        <br />
        <Link to="/todo" className="test-class">Todo</Link>
        <br />
        <Link to="/form" className="test-class">Formik</Link>
      </div>
    );
};

export default {
    component: Home,
};
