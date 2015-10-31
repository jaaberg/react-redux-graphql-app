import React from 'react';

import Counter from '../common/counter';

class CounterPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Counter </h1>
        <Counter
          count={this.props.count}
          dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

CounterPage.propTypes = {
  count: React.PropTypes.number,
  dispatch: React.PropTypes.func.isRequired
};

export default CounterPage;
