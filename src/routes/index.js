import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Store from '../modules/Store';
import { Profile } from '../modules/Profile/components';

export default () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Switch>
      <Route path="/" exact render={props => <App {...props} />} />
      <Route path="/store" exact render={props => <Store {...props} />} />
      <Route path="/profile" exact render={props => <Profile {...props} />} />
    </Switch>
  </BrowserRouter>
);
