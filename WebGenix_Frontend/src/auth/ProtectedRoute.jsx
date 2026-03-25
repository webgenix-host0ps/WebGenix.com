// src/auth/ProtectedRoute.jsx
//
// Props:
//   children     — the page to render
//   allowedRoles — optional array e.g. ['admin'] or ['support', 'admin']
//                  omit to allow ANY authenticated user
//
// If not authenticated → triggers keycloak.login()
// If wrong role        → redirects to their own correct dashboard

import { Navigate } from "react-router-dom";
import keycloak from "./keycloak";
import { getUserRole } from "./getUserRole";

const ROLE_HOME = {
  admin:   "/admin/dashboard",
  support: "/support/dashboard",
  client:  "/client/dashboard",
};

export default function ProtectedRoute({ children, allowedRoles }) {
  if (!keycloak.authenticated) {
    keycloak.login({ redirectUri: window.location.origin + "/dashboard" });
    return null;
  }

  // If this route is role-restricted, check the user's role
  if (allowedRoles && allowedRoles.length > 0) {
    const role = getUserRole();
    if (!allowedRoles.includes(role)) {
      // Send them to their correct home instead of a blank screen
      return <Navigate to={ROLE_HOME[role] ?? "/client/dashboard"} replace />;
    }
  }

  return children;
}