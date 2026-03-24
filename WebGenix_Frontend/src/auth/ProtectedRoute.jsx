import keycloak from "./keycloak";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (!keycloak.authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
