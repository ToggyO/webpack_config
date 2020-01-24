import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ApplicationState } from '@store/index';
import { todoTypes, todoActions } from '@store/todos';


interface PropsFromState {
  todos: todoTypes.TodosItemResponse[];
}

interface PropsFromDispatch {
  getTodos(): void;
}

type AllProps = PropsFromState & PropsFromDispatch;

/* eslint-disable react/jsx-one-expression-per-line */
const Todo: React.FC<AllProps> = (props) => {
  const { todos, getTodos } = props;
  debugger
  useEffect(() => {
    getTodos();
  }, []);

  if (todos.length > 0) console.log(todos);

  return (
    <div>
      <h1>Todo</h1>
      <Link to="/">Home</Link>
      <br />
      <br />
      {todos.todos.map(todo => <p key={todo.id}>{todo.id} {todo.title}</p>)}
      <br />
    </div>
  );
};

const mapStateToProps = ({ todos }: ApplicationState['todos']): PropsFromState => ({ todos });

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  getTodos() {
    dispatch(todoActions.fetchTodos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
