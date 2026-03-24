import { createContext, useEffect, useState } from "react";
import keycloak from "./keycloak";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    keycloak
      .init({
        onLoad: "check-sso",
        pkceMethod: "S256",
      })
      .then((auth) => {
        setAuthenticated(auth);

        if (auth) {
          setUser(keycloak.tokenParsed);
        }
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        keycloak,
        authenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
