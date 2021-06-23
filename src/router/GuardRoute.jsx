import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuardRoute = ({ component: Component, guardFuntion, redirectPath,...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !guardFuntion || guardFuntion() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={redirectPath} />
      )
    }
  />
);

export default GuardRoute;
