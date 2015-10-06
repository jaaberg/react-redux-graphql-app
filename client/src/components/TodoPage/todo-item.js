import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    this.props.handleComplete(this.props.id);
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.handleComplete} checked={this.props.completed} /> {this.props.text}
      </div>
    );
  }
}
;

export default TodoItem;