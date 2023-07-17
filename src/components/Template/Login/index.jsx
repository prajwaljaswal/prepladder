import React from 'react';
import { authProvider } from '../../../authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import logo from '../../../assests/logo.svg';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  return (
    <AzureAD provider={authProvider} forceLogin={false}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            sessionStorage.setItem('token', accountInfo.jwtIdToken);
            return (
              <p>
                <span>Welcome = {accountInfo.account.userName}!</span>
                <br></br>
                <span>token = {accountInfo.jwtIdToken}</span>
                <br></br>
                <p>
                  <b>User Role</b>
                </p>
                <ul>
                  {accountInfo.account.idToken.roles &&
                    accountInfo.account.idToken.roles.map(function (object, i) {
                      return <li>{object}</li>;
                    })}
                </ul>
                Email Address*
                {/* <span>token =  {accountInfo.idToken}</span>
          <br></br> */}
                {/* <br>Roles :</br> */}
                {/* <p>
            <ul>
            {accountInfo.idToken.roles.map(function(object, i){
              return <li>{object}</li>;
           })}
            </ul>
          </p> */}
                {navigate('/searchPage')}
                <button onClick={logout}>Logout</button>
              </p>
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

export default Login;
