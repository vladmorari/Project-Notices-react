import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ isAuthenticated, ...props }: any) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
