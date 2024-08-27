import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const PrivateRoute: React.FC = () => {
  const { state } = useAuth();

  if (state.isSubmitting) {
    // Optionally, you can show a loading indicator while checking the auth state
    // return <p>Loading...</p>;
  }

  return state.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
