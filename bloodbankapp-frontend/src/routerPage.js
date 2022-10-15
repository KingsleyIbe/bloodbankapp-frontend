import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/auth/forgotPassword';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ResetPassword from './pages/auth/resetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import LandingPage from './pages/landingPage/landingPage';

export default function RouterPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}
