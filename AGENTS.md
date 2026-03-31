# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

WebGenix is a hosting-platform product (web hosting, domains, SSL, VPS, etc.) built as a MERN-style stack with Keycloak for auth and Zammad for support ticketing. The repo is a monorepo with separate top-level directories per concern.

## Repository Structure

```
WebGenix_Frontend/     # React 19 + Vite + TailwindCSS v4 SPA
WebGenix_Backend/      # Node.js + Express v5 API (ESM, port 5000)
WebGenix_keycloak/     # Docker Compose: Keycloak + PostgreSQL (port 8080)
WebGenix_zammad/       # Docker Compose: Zammad helpdesk stack (port 8090)
WebGenix_Portainer/    # Docker Compose: Portainer UI (port 9000/9443)
WebGenix_Containers/   # Additional containers (e.g. Outline wiki)
WebGenix_Documentations/ # Project structure and Keycloak docs
```

## Commands

### Frontend (`WebGenix_Frontend/`)
```sh
npm install          # Install dependencies
npm run dev          # Dev server with HMR (Vite)
npm run build        # Production build → dist/
npm run preview      # Preview production build
npm run lint         # ESLint (react-hooks + react-refresh rules)
```

### Backend (`WebGenix_Backend/`)
```sh
npm install          # Install dependencies
npm run dev          # Dev server with nodemon (auto-reload)
npm start            # Production start (node src/app.js)
```

### Docker services (run from the respective subdirectory)
```sh
# Keycloak + its PostgreSQL
cd WebGenix_keycloak && docker compose up -d

# Zammad support stack
cd WebGenix_zammad && docker compose up -d

# Portainer
cd WebGenix_Portainer && docker compose up -d
```

There is no test framework configured in either package.

## Architecture

### Authentication (Keycloak-first)
Keycloak is the sole identity provider. It must be running before the frontend or backend will function correctly.

- **Keycloak config**: realm `webgenix`, client ID `webgenix-frontend`, URL `http://localhost:8080`
- **Init**: `main.jsx` calls `keycloak.init({ onLoad: "check-sso" })` *before* mounting React, so the app renders regardless of auth state.
- **Role detection**: `src/auth/getUserRole.js` checks *both* `realm_access.roles` and `resource_access["webgenix-frontend"].roles` from the JWT and maps them to three tiers: `admin`, `support`, `client`. The same logic is duplicated in `RedirectDashboard.jsx`.
- **Route protection**: `src/auth/ProtectedRoute.jsx` wraps routes with optional `allowedRoles`. Unauthenticated users are redirected to Keycloak login; authenticated users with wrong role are sent to their correct dashboard home.
- **Post-login flow**: Keycloak redirects to `/dashboard` → `RedirectDashboard.jsx` detects role and navigates to `/admin/dashboard`, `/support/dashboard`, or `/client/dashboard`.

### Frontend Structure (`WebGenix_Frontend/src/`)
- **`auth/`** – Active Keycloak integration (`keycloak.js`, `AuthProvider.jsx`, `ProtectedRoute.jsx`, `getUserRole.js`). `useAuth.js` exists but is currently empty.
- **`components/auth/`** – Legacy/unused copies; `LoginForm.jsx-Not-In-Use` and `SignupForm.jsx-Not-In-Use` should be ignored.
- **`pages/`** – Route-level components. Dashboard pages are grouped into `Admin_Dashboard_Pages/`, `Client_Dashboard_Pages/`, and `Support_Dashboard_pages/`. Admin dashboard uses a nested layout (`AdminLayout`) with sub-routes (`overview`, `users`, `users/:id`, `services`, `profile`, `settings`).
- **`components/services/`** – One subdirectory per service offering (vps, ssl-certificate, domain-search, etc.); each follows a `ServiceHero / FeaturesList / PricingSection` pattern.
- **`data/`** – Static JS data files (`blog.js`, `services.js`) used by their corresponding page components.
- **`components/layout/`** – Global `Header` and `Footer` rendered outside `<Routes>` in `App.jsx`.

### Backend Structure (`WebGenix_Backend/src/`)
The backend has no database of its own—it proxies to Zammad for user and ticket data.

- **`app.js`** – Entry point; mounts `/api/tickets` and `/api/users` routes plus a `/test-zammad` health-check endpoint.
- **`middleware/auth.js`** – Extracts the Bearer token and calls `jwt.decode()` (not `jwt.verify()`), so signature is **not** validated. The decoded payload is attached to `req.user`.
- **`services/zammadService.js`** – All Zammad API calls (`findZammadUser`, `createZammadUser`). Uses `ZAMMAD_URL` and `ZAMMAD_TOKEN` from `.env`. Role mapping: `admin → Admin`, `support → Agent`, `client → Customer`.
- **`controllers/ticketController.js`** – `createTicket` and `getTickets` imports are commented out; ticket endpoints will error at runtime until those service functions are re-exported from `zammadService.js`.
- **`controllers/userController.js`** – `POST /api/users/sync` finds or creates a Zammad user from the Keycloak token payload.

### Backend `.env` variables
```
PORT=5000
ZAMMAD_URL=http://localhost:8090/api/v1
ZAMMAD_TOKEN=<token>
KEYCLOAK_REALM=webgenix
KEYCLOAK_CLIENT_ID=webgenix-realm
KEYCLOAK_PUBLIC_KEY=<RSA public key>
```

### Keycloak `.env` variables (WebGenix_keycloak/.env)
```
POSTGRES_DB / POSTGRES_USER / POSTGRES_PASSWORD
KEYCLOAK_ADMIN / KEYCLOAK_ADMIN_PASSWORD
```

## Known Issues / Important Notes

- `ticketController.js` imports `createTicket` and `getTickets` that are commented out — the ticket routes (`POST /api/tickets`, `GET /api/tickets`) will throw `ReferenceError` at runtime until these functions are added to `zammadService.js` and imported.
- `src/auth/middleware/auth.js` uses `jwt.decode` instead of `jwt.verify`, meaning tokens are **not cryptographically verified**. The `KEYCLOAK_PUBLIC_KEY` in `.env` exists but is unused. Fix by using `jwt.verify` with the RSA public key.
- `src/auth/useAuth.js` is empty; do not import from it expecting functionality.
- Tailwind v4 is used via `@tailwindcss/vite` plugin—there is no `tailwind.config.js`; configuration is done in CSS or through the Vite plugin directly.
- The frontend has no TypeScript; ESLint rule `no-unused-vars` ignores variables matching `^[A-Z_]`.
