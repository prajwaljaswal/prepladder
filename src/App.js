import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/AppRouter';
import { authProvider } from './authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import LoginRouter from './routes/LoginRouter';

function App() {
  return (
    <div>
      <LoginRouter />
      <AzureAD provider={authProvider} forceLogin={false}>
        <AppRouter />
      </AzureAD>
    </div>
  );
}

export default App;
