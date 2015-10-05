import React from 'react';

import Counter from '../common/counter';

class Blog extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Blog </h1>
        <Counter count={this.props.count} />
      </div>
    );
  }
}

export default Blog;