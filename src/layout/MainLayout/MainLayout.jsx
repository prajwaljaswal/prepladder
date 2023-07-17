import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../../components/Template/header';

const MainLayout = () => {
  const auth = false;
  return (
    <div>
      {!auth ? (
        <div>
          <Header />
          <Outlet />
        </div>
      ) : (
        <Navigate to="/searchPage" />
      )}
    </div>
  );
};

export default MainLayout;
