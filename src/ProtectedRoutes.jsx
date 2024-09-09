import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userData } from './userData'; // Import userData or handle its retrieval

const ProtectedRoutes = () => {
  // Check if userData is valid
  if (userData === null || userData === undefined) {
    // Redirect to the login page if userData is not valid
    return window.location.pathname = '/';
  }

//  return  userData  ?  <Outlet /> :  <Navigate to="/" replace />

  // Render child routes if userData is valid
  return <Outlet />;
};

export default ProtectedRoutes;
