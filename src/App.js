import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import ErrorPage from './pages/ErrorPage';
import ResourceDetail from './pages/ResourceDetail';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/anime/:id">
        <ResourceDetail category="anime" />
      </Route>
      <Route exact path="/manga/:id">
        <ResourceDetail category="manga" />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
