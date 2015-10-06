import React from 'react';
import { connect } from 'react-redux';

import CounterPage from '../components/CounterPage';

class CounterPageContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CounterPage
        count={this.props.count}
        dispatch={this.props.dispatch} />
    );
  }
};

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(CounterPageContainer);