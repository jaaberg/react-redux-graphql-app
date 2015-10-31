import React from 'react';
import { connect } from 'react-redux';

import TodoPage from '../components/TodoPage';

class TodoPageContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoPage
        todos={this.props.todos}
        dispatch={this.props.dispatch} />
    );
  }
}

TodoPageContainer.propTypes = {
  todos: React.PropTypes.array,
  dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todo.todos
  };
}

export default connect(mapStateToProps)(TodoPageContainer);
