import React from 'react';

import TodoItem from './todo-item';
import { addTodo, completeTodo } from '../../actions/actions';

class TodoPage extends React.Component {

  constructor(props) {
    super(props);

    this._onKeyDown = this._onKeyDown.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  _onKeyDown(event) {
    const text = event.target.value.trim();

    if (event.which === 13) {
      this.props.dispatch(addTodo(text));
      event.target.value = '';
    }
  }

  handleComplete(id) {
    this.props.dispatch(completeTodo(id));
  }

  render() {
    const createTodo = (todo) =>
      (<TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          handleComplete={this.handleComplete} />);

    return (
      <div>
        <h1> Todo-list </h1>
        {this.props.todos.map(createTodo)}
        <input type="checkbox"/>
        <input type="text" onKeyDown={this._onKeyDown} />
      </div>
    );
  }
}

TodoPage.propTypes = {
  todos: React.PropTypes.array,
  dispatch: React.PropTypes.func.isRequired
};

export default TodoPage;
