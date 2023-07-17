import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../../src/pages/LoginPage';
const LoginRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LoginRouter;
