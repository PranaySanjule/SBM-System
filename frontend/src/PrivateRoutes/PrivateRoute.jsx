import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  if (localStorage.getItem("userInfo") !== null) {
    return <Outlet />;
  } else {
    // return "User logged in";
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
