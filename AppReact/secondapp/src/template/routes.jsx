import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Book from '../book/book';
import About from '../about/about';
import Home from '../Home/home';

export default (props) => (
  <Router history={hashHistory}>
    <Router path="/home" component={Home} />
    <Router path="/livros" component={Book} />
    <Router path="/about" component={About} />
    <Redirect from="*" to="/home" />
  </Router>
);
