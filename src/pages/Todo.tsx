import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodos } from '../store/actions/todo';

/* eslint-disable react/jsx-one-expression-per-line */
const Todo = (props) => {
    const { todos, getTodos } = props;
    debugger
    useEffect(() => {
      getTodos();
    },[]);

    return (
      <div>
        <h1>Todo</h1>
        <Link to="/">Home</Link>
        <br />
        <br />
        {todos.map(todo => <p key={todo.id}>{todo.id} {todo.title}</p>)}
        <br />
      </div>
    );
};

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = (dispatch) => ({
    getTodos: bindActionCreators(fetchTodos, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
