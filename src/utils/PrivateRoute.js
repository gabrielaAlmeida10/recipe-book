import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuthValue } from "../context/authContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuthValue();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
