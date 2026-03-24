import { useEffect } from "react";
import keycloak from "../auth/keycloak";

export default function SignupPage() {
  useEffect(() => {
    keycloak.register();
  }, []);

  return <div>Redirecting to signup...</div>;
}
