import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux"

interface IProps extends RouteProps {
  component: React.ElementType | any;
  restricted: boolean;
}

export const PublicRoute: React.FC<IProps> = ({ component: Component, restricted, ...rest }) => {
  const user = useSelector((state: any) => state.user);
  const renderComponent = (props: any) => (
    !!user.id && restricted
      ? <Redirect to={{ pathname: "/" }} />
      : <Component {...props} />
  )
  return <Route {...rest} render={renderComponent} />
}