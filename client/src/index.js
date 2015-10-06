import React from 'react';
import { Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

import store from './reducers';
import App from './components/app';
import TodoPageContainer from './containers/TodoPageContainer';
import CounterPageContainer from './containers/CounterPageContainer';

React.render((
  <div>
    <Provider store={store}>
      {() =>
        <Router>
          <Route path="/" component={App}>
            <Route path="todo" component={TodoPageContainer}/>
            <Route path="counter" component={CounterPageContainer}/>
          </Route>
        </Router>
      }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store}
                monitor={DiffMonitor}
                visibleOnLoad={true} />
    </DebugPanel>
  </div>
), document.querySelector('#main'))
