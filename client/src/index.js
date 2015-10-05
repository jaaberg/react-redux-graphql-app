import React from 'react';
import { Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux';

import store from './reducers';
import App from './components/app';
import AboutPage from './components/AboutPage';
import BlogPageContainer from './containers/BlogPageContainer';

React.render((
  <Provider store={store}>
    {() =>
      <Router>
        <Route path="/" component={App}>
          <Route path="about" component={AboutPage}/>
          <Route path="blog" component={BlogPageContainer}/>
        </Route>
      </Router>
    }
  </Provider>
), document.querySelector('#main'))
