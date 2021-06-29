/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is the HomePage.
      </Route>
      <Route exact path="/starred">
        This is Starred Path
      </Route>
      <Route>This is 404 error path</Route>
    </Switch>
  );
}

export default App;
