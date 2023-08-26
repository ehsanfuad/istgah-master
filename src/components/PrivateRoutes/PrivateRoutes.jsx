import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  let token = localStorage.getItem("jwt");
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
