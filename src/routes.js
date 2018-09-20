import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import HomePage from './pages/HomePage';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);
