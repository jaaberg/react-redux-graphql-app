import React from 'react';
import { Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux';

import store from './reducers';
import App from './components/app';
import TodoPageContainer from './containers/TodoPageContainer';
import CounterPageContainer from './containers/CounterPageContainer';

React.render((
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
), document.querySelector('#main'))
