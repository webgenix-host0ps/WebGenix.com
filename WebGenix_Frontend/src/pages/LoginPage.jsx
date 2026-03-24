import { useEffect } from "react";
import keycloak from "../auth/keycloak";

export default function LoginPage() {
  useEffect(() => {
    keycloak.login({
      redirectUri: window.location.origin + "/dashboard",
    });
  }, []);

  return <div>Redirecting to login...</div>;
}
