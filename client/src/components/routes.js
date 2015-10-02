import React from 'react';
import { Router, Route, Link } from 'react-router'

import App from './app';
import AboutPage from './aboutPage';
import BlogPage from './blogPage';

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={AboutPage} />
      <Route path="blog" component={BlogPage} />
    </Route>
  </Router>
), document.querySelector('#main'))
