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

TodoItem.propTypes = {
  handleComplete: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  id: React.PropTypes.number,
  completed: React.PropTypes.bool,
};

export default TodoItem;
