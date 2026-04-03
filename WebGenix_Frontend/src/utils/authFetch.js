// src/utils/authFetch.js
import keycloak from '../auth/keycloak';

// Wait for token to be available (max 10 seconds)
const waitForToken = () => {
  return new Promise((resolve, reject) => {
    if (keycloak.token) {
      resolve(keycloak.token);
      return;
    }
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (keycloak.token) {
        clearInterval(interval);
        resolve(keycloak.token);
      } else if (attempts > 100) { // 10 seconds
        clearInterval(interval);
        reject(new Error('Token timeout'));
      }
    }, 100);
  });
};

export async function authFetch(url, options = {}) {
  // Ensure token exists
  let token;
  try {
    token = await waitForToken();
    await keycloak.updateToken(30);
    token = keycloak.token;
  } catch (err) {
    console.error('Token unavailable', err);
    keycloak.login();
    throw new Error('Authentication required');
  }

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  return fetch(url, { ...options, headers });
}