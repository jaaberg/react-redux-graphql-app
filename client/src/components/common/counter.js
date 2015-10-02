import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: (props.start) ? props.start : 0
    }
  }

  _onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <p>
          <span> {this.state.count} </span>
          <button onClick={this._onClick.bind(this)}> Increase </button>
        </p>
      </div>
    );
  }
}
;

export default Counter;