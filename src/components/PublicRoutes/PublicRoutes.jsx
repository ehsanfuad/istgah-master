import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes() {
  let token = localStorage.getItem("jwt");
  return token ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
