import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route exact path='/home' component={Home} />
      <Redirect from='/' exact to='/home' />
    </Switch>
  );
};

export default withRouter(App)
