import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/AppRouter';
import { authProvider } from './authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

function App() {
  return (
    <div>
      <AzureAD provider={authProvider} forceLogin={false}>
        {({ login, logout, authenticationState, error, accountInfo }) => {
          debugger;
          switch (authenticationState) {
            case AuthenticationState.Authenticated:
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
                            <img
                              src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png"
                              className="logo"
                              alt="images"
                            />
                          </div>
                          <header className="header">Log in</header>
                          <header className="subHeader">
                            Welcome to <b>animal planet!</b> Please Enter your Details
                          </header>
                          <a href="https://login.microsoftonline.com/e8679cd0-0462-4591-bfc5-a55bb33d5560/oauth2/v2.0/authorize?response_type=id_token&scope=user.read%20openid%20profile&client_id=c0d70e6f-1e1d-470e-975f-a782d5a6b5a9&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_mode=fragment&sso_reload=true">
                            Login with Azure
                          </a>
                          {error && (
                            <p>
                              <span>An error occured during authentication, please try again!</span>
                            </p>
                          )}
                          <button className="LoginButton" onClick={login}>
                            Login
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
                            <img
                              src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png"
                              className="logo"
                              alt="images"
                            />
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
      <AppRouter />
    </div>
  );
}

export default App;
