import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <Navigate to="/login" />;
}
