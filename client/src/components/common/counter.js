import React from 'react';

var store = require('../../reducers');
var Actions = require('../../actions/actions');

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    store.dispatch(Actions.increaseCounter());
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

export default Counter;