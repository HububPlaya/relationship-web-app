import React from 'react';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Home from './components/home';
import PrivateRoute from './components/PrivateRoute';

const App:React.FC = () => {

  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

        {/* Private routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          {/* Add more private routes here */}
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
  
}

export default App;
