import React from 'react';

import Header from './common/header';

require('../style/common.scss');

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
