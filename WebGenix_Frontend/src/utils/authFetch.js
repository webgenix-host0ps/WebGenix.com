// src/utils/authFetch.js
import keycloak from '../auth/keycloak';

// Helper: wait for Keycloak to be ready
const waitForKeycloak = () => {
  return new Promise((resolve, reject) => {
    // If already initialized with token, resolve immediately
    if (keycloak.authenticated && keycloak.token) {
      resolve(keycloak);
      return;
    }
    // If using global window.keycloak (from main.jsx)
    if (window.keycloak && window.keycloak.authenticated && window.keycloak.token) {
      resolve(window.keycloak);
      return;
    }
    // Listen for ready event (if Keycloak instance emits it)
    const timeout = setTimeout(() => reject(new Error('Keycloak initialization timeout')), 10000);
    const checkInterval = setInterval(() => {
      if (keycloak.authenticated && keycloak.token) {
        clearInterval(checkInterval);
        clearTimeout(timeout);
        resolve(keycloak);
      } else if (window.keycloak?.authenticated && window.keycloak.token) {
        clearInterval(checkInterval);
        clearTimeout(timeout);
        resolve(window.keycloak);
      }
    }, 100);
  });
};

export async function authFetch(url, options = {}) {
  // Get the active Keycloak instance (prefer imported one, fallback to global)
  const activeKeycloak = keycloak.authenticated ? keycloak : (window.keycloak || keycloak);
  
  // Ensure Keycloak is ready and token exists
  await waitForKeycloak();
  
  // Refresh token if near expiry (30 seconds buffer)
  try {
    await activeKeycloak.updateToken(30);
  } catch (err) {
    console.error('Token refresh failed', err);
    // Force login
    activeKeycloak.login();
    throw new Error('Session expired, redirecting to login...');
  }

  const token = activeKeycloak.token;
  if (!token) {
    throw new Error('No authentication token available');
  }

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    'Authorization': `Bearer ${token}`,
  };

  const response = await fetch(url, { ...options, headers });
  
  // If unauthorized, try to refresh token once and retry
  if (response.status === 401) {
    try {
      await activeKeycloak.updateToken(0);
      const newToken = activeKeycloak.token;
      const retryHeaders = {
        ...headers,
        'Authorization': `Bearer ${newToken}`,
      };
      return fetch(url, { ...options, headers: retryHeaders });
    } catch (refreshError) {
      console.error('Retry failed', refreshError);
      activeKeycloak.login();
      throw new Error('Authentication failed, please login again');
    }
  }
  
  return response;
}