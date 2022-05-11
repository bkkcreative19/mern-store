import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirctParam = "/" }) => {
  const userAuthData = useSelector((state) => state.userLogin);

  const { userInfo } = userAuthData;

  return userInfo ? (
    <Outlet />
  ) : (
    <Navigate to={`/account/login/${redirctParam}`} />
  );
  // <Route
  //   {...rest}
  //   render={(props) =>
  //     !userInfo ? <Navigate to="/login" /> : <Component {...props} />
  //   }
  // />
};
