import React from 'react';
import { connect } from 'react-redux';

import BlogPage from '../components/BlogPage';

class BlogPageContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BlogPage count={this.props.count} />
    );
  }
};

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(BlogPageContainer);