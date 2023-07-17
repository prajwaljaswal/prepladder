import React, { useState, useEffect } from 'react';

import { authProvider } from '../../../authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import logo from '../../../assests/logo.svg';

import profile from '../../../assests/profile.svg';
import notification from '../../../assests/notification.svg';
import jwt_decode from 'jwt-decode';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const Header = () => {
  const [loginData, setLoginData] = useState({});
  useEffect(() => {
    const token = jwt_decode(sessionStorage.getItem('token'));
    setLoginData(token);
    console.log(token, token.name, loginData);
  }, []);

  const logoutClear = () => {
    localStorage.clear();
    sessionStorage.clear();
  };
  return (
    <AzureAD provider={authProvider} forceLogin={false}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            sessionStorage.setItem('token', accountInfo.jwtIdToken);
            return (
              <div className="header-container">
                <div className="logo-container">
                  <img src={logo} alt="logo" />
                </div>
                <div className="header-icons">
                  <div className="logo-container">
                    <FiLogOut
                      color="white"
                      className="mt-1 logout-button"
                      onClick={() => {
                        logout();
                        logoutClear();
                      }}
                    />
                  </div>

                  <div>
                    <img src={notification} alt="logo" />
                  </div>
                  <div className="d-flex">
                    <div>
                      <img src={profile} alt="logo" />
                    </div>
                    <div className="login-name">{loginData?.name} </div>
                  </div>
                </div>
              </div>
            );
          case AuthenticationState.Unauthenticated:
            return (
              <div>
                <div className="LoginPageContainer">
                  <div className="LoginPageInnerContainer">
                    <div className="ImageContianer">
                      <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" alt="images" />
                    </div>
                    <div className="LoginFormContainer">
                      <div className="LoginFormInnerContainer">
                        <div className="LogoContainer">
                          <img src={logo} className="logo" alt="images" />
                        </div>
                        <header className="header">Log in</header>
                        <header className="subHeader">
                          Welcome to <b>Project Management System!</b> Please Enter your Details
                        </header>

                        {error && (
                          <p>
                            <span>An error occured during authentication, please try again!</span>
                          </p>
                        )}
                        <button className="LoginButton" onClick={login}>
                          Login Using Microsoft
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          case AuthenticationState.InProgress:
            return (
              <div>
                <div className="LoginPageContainer">
                  <div className="LoginPageInnerContainer">
                    <div className="ImageContianer">
                      <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" alt="images" />
                    </div>
                    <div className="LoginFormContainer">
                      <div className="LoginFormInnerContainer">
                        <div className="LogoContainer">
                          <img src={logo} className="logo" alt="images" />
                        </div>
                        <header className="header">Authenticating...</header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        }
      }}
    </AzureAD>
  );
};

export default Header;
