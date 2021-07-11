import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";

interface IProps extends RouteProps {
  component: React.ElementType | any;
}

export const PrivateRoute: FC<IProps> = ({ component: Component, ...rest }) => {
  const user = useSelector((state: any) => state.user);
  const routeComponent = (props: any) => (
    !!user.id
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login' }} />
  )
  return <Route {...rest} render={routeComponent} />
}