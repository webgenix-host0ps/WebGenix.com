import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import keycloak from './auth/keycloak';

keycloak.init({
  onLoad: "check-sso",
  pkceMethod: "S256",
  checkLoginIframe: false,
}).then((authenticated) => {

  // 🔥 REDIRECT AFTER LOGIN
  if (authenticated && window.location.pathname === "/") {
    window.location.href = "/dashboard";
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
});
