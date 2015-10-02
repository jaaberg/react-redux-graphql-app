import React from 'react';

class Counter extends React.Component {

  render() {
    return (
      <p> {this.props.count} </p>
    );
  }
};

export default Counter;