import { useEffect } from "react";
import keycloak from "../auth/keycloak";

export default function LoginPage() {
  useEffect(() => {
    keycloak.login();
  }, []);

  return <div>Redirecting to login...</div>;
}
