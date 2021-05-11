import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
  component: React.ElementType | any;
  isAuthenticated: boolean;
  restricted: boolean;
}

export const PublicRoute: React.FC<IProps> = ({ component: Component, isAuthenticated, restricted, ...rest }) => {
  const renderComponent = (props: any) => (
    isAuthenticated && restricted
      ? <Redirect to={{ pathname: "/" }} />
      : <Component {...props} />
  )
  return <Route {...rest} render={renderComponent} />
}