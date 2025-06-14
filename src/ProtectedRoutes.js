import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function ProtectedRoutes() {
  const token = cookies.get("TOKEN");
  const location = useLocation();

  return token ? (
    // Show nested route content if token exists
    <Outlet />
  ) : (
    // Redirect to home page ("/") and save current location in state
    <Navigate to="/" replace state={{ from: location }} />
  );
}




