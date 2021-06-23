import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import GuardRoute from './GuardRoute';

const renderRoute = ({
  exact,
  path,
  to,
  redirect,
  redirectPath,
  guardFuntion,
  ...rest
}) =>
  redirect ? (
    <Redirect exact={exact} from={path} to={to} key={path}/>
  ) : (
    <GuardRoute
      key={path}
      exact={exact}
      path={path}
      guardFuntion={guardFuntion}
      redirectPath={redirectPath}
      {...rest}
    />
  );

const renderRoutes = (parent) =>
  Object.keys(parent).reduce(
    (acc, item, idx) =>
      !parent[item].path
        ? [...acc, ...renderRoutes(parent[item])]
        : parent[item].children
        ? [...acc, renderRoute(parent[item]), ...renderRoutes(parent[item].children)]
        : [...acc, renderRoute(parent[item], idx)],
    []
  );

export default (routes) => () => <Switch>{renderRoutes(routes)}</Switch>;
