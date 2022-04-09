import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userAuthData = useSelector((state) => state.userLogin);

  const { userInfo } = userAuthData;
  console.log(userInfo);
  return userInfo ? <Outlet /> : <Navigate to="/account/login" />;
  // <Route
  //   {...rest}
  //   render={(props) =>
  //     !userInfo ? <Navigate to="/login" /> : <Component {...props} />
  //   }
  // />
};
