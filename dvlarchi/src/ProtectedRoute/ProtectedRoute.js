// src/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem("adminData");

  return isAdminLoggedIn ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
