# Keycloak + Zammad Integration Checklist

## ✅ ALREADY COMPLETED

- [x] Docker Compose environment variables configured
- [x] Frontend Keycloak URL updated to 192.168.1.37:8080
- [x] Frontend rebuilt
- [x] SSL verification disabled in Zammad
- [x] OmniAuth initializer patched

---

## 📋 MANUAL SETUP REQUIRED

### IN KEYCLOAK (http://192.168.1.37:8080/admin)

**Realm: webgenix**

- [ ] Go to **Clients**
- [ ] Find or create client named **`zammad`**
- [ ] Go to **Settings** tab:
  - Client ID: `zammad`
  - Client Authentication: **ON**
  - Root URL: `http://localhost:8090`
  
- [ ] Go to **Access Settings** tab:
  - Valid redirect URIs:
    - `http://localhost:8090/auth/openid_connect/callback`
    - `http://localhost:8090/*`
  - Valid post logout redirect URIs:
    - `http://localhost:8090`
  - Web Origins:
    - `http://localhost:8090`
  - Click **Save**

- [ ] Go to **Capability config** tab:
  - Standard Flow Enabled: **ON**
  - Implicit Flow Enabled: **OFF**
  - Direct Access Grants Enabled: **OFF**
  - Click **Save**

- [ ] Go to **Credentials** tab:
  - **Copy the Client Secret** (you'll need this)
  - Example: `m91Dw00jpIdgnaw8CHhznbgRGIZMASGt`

---

### IN ZAMMAD (http://localhost:8090)

- [ ] Login as Admin
- [ ] Go to **Admin** (top menu)
- [ ] Go to **Settings** (left sidebar)
- [ ] Scroll to **Third-party**
- [ ] Find **Authentication via OpenID Connect**
- [ ] Toggle **Enable Authentication via OpenID Connect**: **ON**
- [ ] Fill in these fields:
  
  | Field | Value |
  |-------|-------|
  | Display Name | `Webgenix SSO` |
  | Identifier | `openid_connect` |
  | Issuer | `http://192.168.1.37:8080/realms/webgenix` |
  | UID Field | `sub` |
  | Scopes | `openid email profile` |
  | PKCE | `yes` |

- [ ] Click **Submit**

---

### UPDATE DOCKER-COMPOSE (IF CLIENT SECRET CHANGED)

- [ ] Get Client Secret from Keycloak Credentials tab
- [ ] Edit: `WebGenix_zammad/docker-compose.yml`
- [ ] Find: `OPENID_CONNECT_CLIENT_SECRET:`
- [ ] Replace value with your actual Client Secret:
  ```yaml
  OPENID_CONNECT_CLIENT_SECRET: "YOUR_ACTUAL_SECRET_HERE"
  ```
- [ ] Save file

---

### RESTART SERVICES

```bash
cd "C:\Users\Anurag\Downloads\webgenix-V1.0\WebGenix_zammad"
docker compose down
docker compose up -d
```

Wait 30 seconds.

---

### VERIFY SERVICES ARE UP

```bash
docker ps
# All containers should show "Up" status

docker logs zammad-railsserver --tail 5
# Should show: "* Listening on http://[::]:3000"
```

---

## 🧪 TESTING

### Test 1: Access Zammad Login
- [ ] Go to: `http://localhost:8090/#login`
- [ ] You should see **"Webgenix SSO"** button

### Test 2: Click Webgenix SSO Button
- [ ] Click **Webgenix SSO**
- [ ] Redirected to Keycloak login page
- [ ] Login with Keycloak credentials
- [ ] Redirected back to Zammad dashboard

### Test 3: Verify User Created
- [ ] Go to Zammad Admin → Users
- [ ] Your Keycloak user should be in the list
- [ ] Email should match Keycloak email

---

## 📝 NOTES

- **Client Secret Location**: Keycloak → Clients → zammad → Credentials tab
- **Callback URL**: Must be exactly `http://localhost:8090/auth/openid_connect/callback`
- **Issuer URL**: Must be exactly `http://192.168.1.37:8080/realms/webgenix` (NOT https)
- **Identifier**: Must be `openid_connect` (NOT `keycloak`)
- **SSL Verification**: Disabled in docker-compose.yml (for dev only)

---

## ❌ COMMON MISTAKES

1. ❌ Using HTTPS instead of HTTP for Keycloak
   - ✅ Use: `http://192.168.1.37:8080`

2. ❌ Identifier set to "keycloak" instead of "openid_connect"
   - ✅ Use: `openid_connect`

3. ❌ Wrong callback URL in Keycloak
   - ✅ Use: `http://localhost:8090/auth/openid_connect/callback`

4. ❌ Client Authentication turned OFF in Keycloak
   - ✅ Turn it: **ON**

5. ❌ Not restarting Zammad after changing settings
   - ✅ Always restart: `docker compose down && docker compose up -d`

---

## ✨ FINAL STATE

When everything is working:

- Login page shows "Webgenix SSO" button
- Clicking it redirects to Keycloak
- After login, redirects back to Zammad
- New user created in Zammad from Keycloak token
- User can access dashboard
