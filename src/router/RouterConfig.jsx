import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MyLoader from "../components/ui/loader/MyLoader";
import { AuthContext } from "../context";
import PrivateRoute from "./PrivateRoute";
import { publicRoutes, privateRoutes } from "./Routes";

export default function RouterConfig() {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}

      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          element={<PrivateRoute>{route.element}</PrivateRoute>}
          path={route.path}
        />
      ))}

      <Route path="*" element={<Navigate to={"/login"} />}></Route>
    </Routes>
  );
}
