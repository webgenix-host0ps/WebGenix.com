// src/auth/getUserRole.js
//
// Reads the Keycloak JWT and returns "admin" | "support" | "client".
// Checks BOTH realm roles and client roles (resource_access).
// Lists every possible variant of the role name so it works
// regardless of exactly how you named them in Keycloak.

import keycloak from "./keycloak";

const ADMIN_ROLES = [
  "WebGenix_Admin_Role",
  "webgenix_admin_role",
  "app-admin",
  "admin",
  "ADMIN",
  "Admin",
];

const SUPPORT_ROLES = [
  "WebGenix_Support_Role",
  "webgenix_support_role",
  "app-support",
  "support",
  "SUPPORT",
  "Support",
];

export const getUserRole = () => {
  const token = keycloak.tokenParsed;
  if (!token) return "client";

  const realmRoles  = token.realm_access?.roles || [];
  const clientRoles = token.resource_access?.["webgenix-frontend"]?.roles || [];
  const roles       = [...realmRoles, ...clientRoles];

  if (roles.some(r => ADMIN_ROLES.includes(r)))   return "admin";
  if (roles.some(r => SUPPORT_ROLES.includes(r))) return "support";
  return "client";
};