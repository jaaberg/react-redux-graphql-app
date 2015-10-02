import React from 'react';

import Header from './common/header';

require('../style/common.scss');

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
};

export default App;