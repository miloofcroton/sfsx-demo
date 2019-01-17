import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from './constants';

const defaultRoute = () => {
  return Object
    .values(ROUTES)
    .find(route => route.default === true)
    .path;
};

const Switches = () => {

  return Object
    .values(ROUTES)
    .map((route, i) => (
      <Route
        key={i}
        exact={route.linkTo.length === 0}
        path={route.path}
        component={route.Component}
      />
    ))
    .concat(<Redirect key={'default'} to={defaultRoute()} />);
};

export default Switches;
