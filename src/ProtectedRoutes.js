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
    // Redirect to login page ("/login") and save current location in state
    <Navigate to="/login" replace state={{ from: location, message: "You must be logged in to view that page" }} />
  );
}




