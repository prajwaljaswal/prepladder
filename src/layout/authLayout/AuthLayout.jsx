import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../../components/Template/header';
import Footer from '../../components/Template/footer';
import Sidebar from '../../components/Template/Sidebar';
import MobileSidebar from '../../components/Template/Sidebar/MobileSideBar';

const AuthLayout = () => {
  const auth = true;
  return (
    <div>
      {auth ? (
        <div>
          <Header />
          {/* <Header />
          <Outlet/> */}

          <div>
            <MobileSidebar />
          </div>
          <div className="outlet-container">
            <div className="outlet-sidebar sticky">
              <Sidebar />
            </div>
            <div className="outlet-flex">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default AuthLayout;
