import React from 'react';
import { connect } from 'react-redux';

import TodoPage from '../components/TodoPage';

class TodoPageContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoPage />
    );
  }
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(TodoPageContainer);