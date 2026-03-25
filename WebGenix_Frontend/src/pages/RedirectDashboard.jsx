// src/pages/RedirectDashboard.jsx
//
// This component is the single entry point after login.
// It reads the Keycloak token, finds the role, and sends
// the user to the correct dashboard immediately.
//
// Route: /dashboard  (Keycloak redirectUri points here)

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import keycloak from "../auth/keycloak";

// ─────────────────────────────────────────────────────────────────────────────
// ALL possible role name variants are listed here.
// We check every variant so it works regardless of how you named them
// in Keycloak (with spaces, underscores, different casing, etc.)
// ─────────────────────────────────────────────────────────────────────────────
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

function getRoleFromToken(token) {
  if (!token) return "client";

  // Collect roles from BOTH realm_access AND resource_access (client roles)
  const realmRoles  = token.realm_access?.roles || [];
  const clientRoles = token.resource_access?.["webgenix-frontend"]?.roles || [];
  const allRoles    = [...realmRoles, ...clientRoles];

  // Log every time so you can see exactly what Keycloak is sending
  console.log("────────────────────────────────────");
  console.log("👤 User email :", token.email);
  console.log("🔐 Realm roles:", realmRoles);
  console.log("🔐 Client roles:", clientRoles);
  console.log("🔐 All roles  :", allRoles);
  console.log("────────────────────────────────────");

  const isAdmin   = allRoles.some(r => ADMIN_ROLES.includes(r));
  const isSupport = allRoles.some(r => SUPPORT_ROLES.includes(r));

  if (isAdmin)   return "admin";
  if (isSupport) return "support";
  return "client";
}

export default function RedirectDashboard() {
  const navigate = useNavigate();
  const [debugInfo, setDebugInfo] = useState(null);

  useEffect(() => {
    if (!keycloak.authenticated) {
      keycloak.login({ redirectUri: window.location.origin + "/dashboard" });
      return;
    }

    const token = keycloak.tokenParsed;
    if (!token) {
      console.error("Token parsed is null — cannot determine role");
      navigate("/client/dashboard", { replace: true });
      return;
    }

    const role = getRoleFromToken(token);

    // Store debug info so you can see it on screen
    const realmRoles  = token.realm_access?.roles || [];
    const clientRoles = token.resource_access?.["webgenix-frontend"]?.roles || [];
    setDebugInfo({
      email: token.email,
      realmRoles,
      clientRoles,
      detectedRole: role,
    });

    console.log(`✅ Role detected: "${role}" → redirecting to /${role}/dashboard`);

    // Small delay so you can see the debug info if needed
    const timer = setTimeout(() => {
      if (role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else if (role === "support") {
        navigate("/support/dashboard", { replace: true });
      } else {
        navigate("/client/dashboard", { replace: true });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [navigate]);

  // ── Visible loading screen with debug info ──────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center space-y-4 max-w-md px-6">
        {/* Spinner */}
        <div className="w-8 h-8 border-2 border-[#3b82f6] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-[#a1a1a1] text-sm">Redirecting to your dashboard…</p>

        {/* Debug panel — shows roles from token so you can see the exact names */}
        {debugInfo && (
          <div className="mt-6 text-left bg-[#141414] border border-[#262626] rounded-xl p-4 space-y-2">
            <p className="text-xs text-[#525252] font-mono font-medium uppercase tracking-wider">Token debug</p>
            <div className="text-xs font-mono space-y-1">
              <p><span className="text-[#525252]">Email: </span><span className="text-[#fafafa]">{debugInfo.email}</span></p>
              <p><span className="text-[#525252]">Detected role: </span><span className="text-[#3b82f6] font-semibold">{debugInfo.detectedRole}</span></p>
              <div>
                <p className="text-[#525252] mb-1">Realm roles:</p>
                {debugInfo.realmRoles.length > 0
                  ? debugInfo.realmRoles.map(r => (
                    <p key={r} className="text-[#a1a1a1] pl-2">• {r}</p>
                  ))
                  : <p className="text-red-400 pl-2">none</p>
                }
              </div>
              <div>
                <p className="text-[#525252] mb-1">Client roles (webgenix-frontend):</p>
                {debugInfo.clientRoles.length > 0
                  ? debugInfo.clientRoles.map(r => (
                    <p key={r} className="text-[#a1a1a1] pl-2">• {r}</p>
                  ))
                  : <p className="text-[#525252] pl-2">none</p>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}