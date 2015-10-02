import React from 'react';

import Counter from './counter';

require('../style/common.scss');

class App extends React.Component {

  render() {
    return (
      <div>
        <Counter count={42} />
      </div>
    );
  }
};

export default App;