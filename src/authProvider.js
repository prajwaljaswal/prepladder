import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// Msal Configurations
const config = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
    authority: process.env.REACT_APP_AUTHORITY,
  },
  // cache: {
  //   cacheLocation: 'localStorage',
  //   storeAuthStateInCookie: true,
  // },
};
//authority: 'https://login.microsoftonline.com/common',
// Authentication Parameters
const authenticationParameters = {
  scopes: ['user.read'],
};

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html',
};

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options);
