import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// Msal Configurations
const config = {
  auth: {
    clientId: 'c0d70e6f-1e1d-470e-975f-a782d5a6b5a9',
    redirectUri: 'http://localhost:3000/callback',
    authority: 'https://login.microsoftonline.com/e8679cd0-0462-4591-bfc5-a55bb33d5560',
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
