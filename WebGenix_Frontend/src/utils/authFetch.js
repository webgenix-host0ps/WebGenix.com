// src/utils/authFetch.js – safe version
import keycloak from '../auth/keycloak';

export const authFetch = async (url, options = {}) => {
  // Ensure token is fresh
  try {
    await keycloak.updateToken(30);
  } catch (err) {
    console.warn('Token refresh failed', err);
    keycloak.login();
    throw new Error('Session expired');
  }

  const token = keycloak.token;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, { ...options, headers });

  // For non‑OK responses, try to extract error message safely
  if (!response.ok) {
    let errorMsg = `HTTP ${response.status}`;
    try {
      const data = await response.json();
      errorMsg = data.error || data.message || errorMsg;
    } catch (e) {
      // If response is not JSON, read as text
      try {
        const text = await response.text();
        if (text) errorMsg = text;
      } catch (ignore) {}
    }
    throw new Error(errorMsg);
  }

  // For OK responses, preserve the original response object
  // (Do NOT parse JSON here – let the caller do it)
  return response;
};