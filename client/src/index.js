import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import DevTools from './containers/DevTools';
import store from './reducers';
import App from './components/app';
import TodoPageContainer from './containers/TodoPageContainer';
import CounterPageContainer from './containers/CounterPageContainer';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="todo" component={TodoPageContainer}/>
      <Route path="counter" component={CounterPageContainer}/>
    </Route>
  </Router>
);

ReactDOM.render((
  <div>
    <Provider store={store}>
      <div>
        {routes}
        <DevTools />
      </div>
    </Provider>
  </div>
), document.querySelector('#main'));
