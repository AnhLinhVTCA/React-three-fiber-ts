import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'pages/Home';

type RouteProps = {
  path: string;
  exact?: boolean;
  component: React.FC<RouteComponentProps>;
  routes?: RouteProps[] | undefined;
};

const routes: RouteProps[] = [{ path: '/', exact: true, component: HomePage }];

const RouteWithSubRoutes: FC<RouteProps> = (route) => (
  <Route path={route.path} exact={route.exact} component={route.component} />
);

const RootRoute: FC = () => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </Router>
);

export default RootRoute;
