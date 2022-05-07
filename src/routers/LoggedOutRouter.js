import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Onboarding from '../pages/auth/Onboarding';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

const LoggedOutRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default LoggedOutRouter;