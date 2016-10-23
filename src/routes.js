import React from 'react';
import {
  IndexRoute,
  Route,
} from 'react-router';
import {
  App,
  HomePage,
  NotFound,
  UserPage,
  RepoPage,
} from 'containers';

export default () => {
  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/:login" component={UserPage} />
      <Route path="/:login/:name" component={RepoPage} />
      <Route path="/404" component={NotFound} />
      <Route path="/4044" component={NotFound} />
    </Route>
  );
  return routes;
};
