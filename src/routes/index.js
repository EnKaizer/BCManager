import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Store from '../modules/Store';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <App {...props} />} />
      <Route path="/store" exact render={props => <Store {...props} />} />
    </Switch>
  </BrowserRouter>
);
