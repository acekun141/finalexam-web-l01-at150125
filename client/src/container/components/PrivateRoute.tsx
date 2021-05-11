import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
  component: React.ElementType | any;
  isAuthenticated: boolean;
}

export const PrivateRoute: FC<IProps> = ({ component: Component, isAuthenticated, ...rest }) => {
  const routeComponent = (props: any) => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login' }} />
  )
  return <Route {...rest} render={routeComponent} />
}