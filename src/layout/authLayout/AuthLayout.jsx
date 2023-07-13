import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import MobileSidebar from "../../components/Sidebar/MobileSideBar";

const AuthLayout = () => {
  const auth = true;
  return (
    <div>
      {auth ? (
        <div>
          <Header/>
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
   
    <Outlet/>
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
