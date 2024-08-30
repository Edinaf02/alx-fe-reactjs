// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Adjust the path if necessary

function ProtectedRoute() {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // Redirect to the home page if not authenticated
    return <Navigate to="/" />;
  }

  return <Outlet />; // Render nested routes if authenticated
}

export default ProtectedRoute;
