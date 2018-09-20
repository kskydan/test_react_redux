import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// pages
import AppLayout from "./pages/AppLayout";
import HomePage from './pages/HomePage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

export default (
  <BrowserRouter>
    <AppLayout titleNavbar="Bla-Bla-Blog">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={PostListPage} />
        <Route exact path="/posts/:id" component={PostPage} />
        <Redirect to="/" /> {/* redirect 404 status code */}
      </Switch>
    </AppLayout>
  </BrowserRouter>
)
