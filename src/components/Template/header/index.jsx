import React, { useState, useEffect } from 'react';
import logo from '../../../assests/logo.svg';
import profile from '../../../assests/profile.svg';
import notification from '../../../assests/notification.svg';
import jwt_decode from 'jwt-decode';
const Header = () => {
  const [loginData, setLoginData] = useState({});
  useEffect(() => {
    setLoginData(sessionStorage.getItem('token'));
    const token = jwt_decode(sessionStorage.getItem('token'));
    console.log(token, token.name);
  }, []);
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-icons">
        <div>
          <img src={notification} alt="logo" />
        </div>
        <div className="d-flex">
          <div>
            <img src={profile} alt="logo" />
          </div>
          <div>{loginData.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
