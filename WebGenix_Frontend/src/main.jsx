import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import keycloak from './auth/keycloak';

keycloak.init({
  onLoad: "check-sso",        // 🔥 allows home page without login
  pkceMethod: "S256",
  checkLoginIframe: false,
}).then(async (authenticated) => {
  if (authenticated) {
    // Only try to refresh token if authenticated
    try {
      await keycloak.updateToken(0);
    } catch (error) {
      console.error("Failed to refresh token", error);
    }
    console.log("KEYCLOAK TOKEN:", keycloak.tokenParsed);
  } else {
    console.log("User not authenticated – app will still render");
  }

  // ✅ Always render the app
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}).catch((err) => {
  console.error("Keycloak init failed:", err);
});