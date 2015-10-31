import React from 'react';

import { increaseCounter } from '../../actions/actions';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.dispatch(increaseCounter());
  }

  render() {
    return (
      <div>
        <p>
          <span> {this.props.count} </span>
          <button onClick={this._onClick}> Increase </button>
        </p>
      </div>
    );
  }

}

Counter.propTypes = {
  count: React.PropTypes.number,
  dispatch: React.PropTypes.func.isRequired
};

export default Counter;
