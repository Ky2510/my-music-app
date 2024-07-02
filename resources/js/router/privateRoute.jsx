import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};
 
const PublicRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/home" /> : element;
};

export { PrivateRoute, PublicRoute };
