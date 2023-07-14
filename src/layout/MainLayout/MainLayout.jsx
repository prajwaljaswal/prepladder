import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const MainLayout = () => {
  const auth = true;
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
