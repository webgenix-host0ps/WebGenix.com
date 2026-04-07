# Keycloak + Zammad OpenID Connect Integration Setup

## Prerequisites
- Keycloak running on: `http://192.168.1.37:8080`
- Zammad running on: `http://localhost:8090`
- Realm: `webgenix`

---

## PART 1: KEYCLOAK SETUP

### Step 1: Create/Verify Zammad Client in Keycloak

1. **Go to Keycloak Admin Console**
   - URL: `http://192.168.1.37:8080/admin`
   - Login with admin credentials

2. **Select the "webgenix" Realm**
   - Left sidebar → Click on "webgenix" (if not already selected)

3. **Navigate to Clients**
   - Left sidebar → **Clients**

4. **Create New Client (if doesn't exist)**
   - Click **Create client**
   - **Client ID**: `zammad`
   - **Client Protocol**: `openid-connect`
   - **Client Authentication**: Toggle `ON` (makes it confidential)
   - Click **Next** → **Save**

5. **If Client Already Exists**
   - Click on the `zammad` client from the list
   - Continue to next steps

### Step 2: Configure Zammad Client Settings

1. **General Tab**
   - **Client ID**: `zammad` (read-only)
   - **Name**: `Zammad`
   - **Description**: `Zammad Helpdesk OpenID Connect`
   - **Root URL**: `http://localhost:8090`
   - **Home URL**: `http://localhost:8090`

2. **Access Settings Tab**
   - **Valid redirect URIs**: 
     ```
     http://localhost:8090/auth/openid_connect/callback
     http://localhost:8090/*
     ```
   - **Valid post logout redirect URIs**: 
     ```
     http://localhost:8090
     http://localhost:8090/
     ```
   - **Web Origins**: 
     ```
     http://localhost:8090
     ```
   - Click **Save**

3. **Capability Config Tab**
   - **Client Authentication**: `ON`
   - **Authorization**: `OFF`
   - **Standard Flow Enabled**: `ON`
   - **Implicit Flow Enabled**: `OFF`
   - **Direct Access Grants Enabled**: `OFF`
   - Click **Save**

4. **Advanced Tab**
   - **Access Token Signature Algorithm**: `RS256`
   - **ID Token Signature Algorithm**: `RS256`
   - **Proof Key for Public Client Code Exchange**: `S256`
   - Click **Save**

### Step 3: Get Client Secret

1. **Go to Credentials Tab**
2. **Copy the Client Secret** (under "Client Credentials")
   - Example: `m91Dw00jpIdgnaw8CHhznbgRGIZMASGt` (yours will be different)
   - **Save this** - you'll need it for Zammad

### Step 4: Configure Mappers (Optional but Recommended)

1. **Go to Client Scopes Tab**
2. **Select `openid`** scope
3. **Go to Mappers** subtab
4. **Verify these mappers exist** (they usually do by default):
   - `email` (Mapper Type: User Property)
   - `email verified` (Mapper Type: User Property)
   - `name` (Mapper Type: User Property)
   - `preferred_username` (Mapper Type: User Property)

If any are missing, click **Add Mapper** → **By Configuration** and add them.

---

## PART 2: ZAMMAD SETUP

### Step 1: Restart Zammad Rails Server

```bash
docker restart zammad-railsserver zammad-nginx
```

Wait 10 seconds for startup.

### Step 2: Access Zammad Admin Settings

1. **Go to**: `http://localhost:8090`
2. **Login** with your admin account
3. **Navigate to**: 
   - Top menu → **Admin** 
   - Left sidebar → **Settings**
   - Scroll down → **Third-party**
   - **Authentication via OpenID Connect**

### Step 3: Configure OpenID Connect Settings

Fill in these fields:

| Field | Value |
|-------|-------|
| **Enable Authentication via OpenID Connect** | Toggle `ON` |
| **Display Name** | `Webgenix SSO` |
| **Identifier** | `openid_connect` |
| **Issuer** | `http://192.168.1.37:8080/realms/webgenix` |
| **UID Field** | `sub` |
| **Scopes** | `openid email profile` |
| **PKCE** | `yes` |
| **Your Callback URL** | `http://localhost:8090/auth/openid_connect/callback` |

**Do NOT fill in**:
- Client ID
- Client Secret
- These are set via environment variables

Click **Submit**

### Step 4: Update Docker Compose (if not done)

Edit: `C:\Users\Anurag\Downloads\webgenix-V1.0\WebGenix_zammad\docker-compose.yml`

Update the `zammad-railsserver` section's environment variables:

```yaml
environment:
  <<: *zammad-environment
  OPENID_CONNECT_HTTP_VERIFY_NONE: "true"
  OPENID_CONNECT_SSL_VERIFY_PEER: "false"
  RUBY_SSL_VERIFY_NONE: "true"
  SSL_CERT_FILE: "/etc/ssl/certs/ca-certificates.crt"
  OPENID_CONNECT_CLIENT_ID: "zammad"
  OPENID_CONNECT_CLIENT_SECRET: "m91Dw00jpIdgnaw8CHhznbgRGIZMASGt"
  NODE_TLS_REJECT_UNAUTHORIZED: "0"
```

Replace `m91Dw00jpIdgnaw8CHhznbgRGIZMASGt` with your actual Client Secret from Keycloak.

### Step 5: Restart Services

```bash
cd "C:\Users\Anurag\Downloads\webgenix-V1.0\WebGenix_zammad"
docker compose down
docker compose up -d
```

Wait 30 seconds for all services to start.

### Step 6: Verify Configuration

```bash
docker logs zammad-railsserver --tail 20
```

You should see:
```
* Listening on http://[::]:3000
```

---

## PART 3: FRONTEND SETUP

### Step 1: Update Keycloak URLs (Already Done)

Both files updated to use `http://192.168.1.37:8080`:

- ✅ `src/auth/keycloak.js`
- ✅ `src/components/auth/keycloak.js`

### Step 2: Rebuild Frontend (Already Done)

```bash
cd "C:\Users\Anurag\Downloads\webgenix-V1.0\WebGenix_Frontend"
npm run build
```

---

## PART 4: TESTING

### Test 1: Access Zammad Login Page

1. **Go to**: `http://localhost:8090/#login`
2. **You should see**:
   - Regular login form (Username/Email + Password)
   - **"Webgenix SSO"** button below (in "OR SIGN IN USING" section)

### Test 2: Click Webgenix SSO Button

1. Click **"Webgenix SSO"** button
2. **You should be redirected** to Keycloak login page
3. **Login** with your Keycloak credentials
4. **You should be redirected** back to Zammad dashboard

### Test 3: User Auto-Creation (if enabled)

If you enabled "Automatic account link on initial logon":
- New Zammad user created automatically from Keycloak token
- User email and name from Keycloak attributes

If disabled:
- User must exist in Zammad first
- Link account via Profile → Linked Accounts

---

## TROUBLESHOOTING

### Error: 404 Not Found on `/auth/openid_connect`

**Solution**: 
- Verify IDENTIFIER is set to `openid_connect` (not `keycloak`)
- Restart: `docker restart zammad-railsserver`

### Error: SSL_connect returned=1 errno=0

**Solution**: 
- Already fixed by adding SSL verification disable to docker-compose.yml
- Verify `OPENID_CONNECT_SSL_VERIFY_PEER: "false"` is set
- Restart: `docker restart zammad-railsserver`

### Error: csrf_detected

**Solution**:
- State parameter mismatch
- Usually caused by SSL errors on first request
- Clear browser cookies and try again
- Verify Keycloak callback URL matches exactly

### Error: Invalid state parameter

**Solution**:
- Keycloak redirect URI doesn't match Zammad callback URL
- In Keycloak → Clients → zammad → Access Settings:
  - Add: `http://localhost:8090/auth/openid_connect/callback`
- Save and restart Zammad

### Users can't login

**Solution**:
- Verify user exists in Zammad OR
- Enable "Automatic account link on initial logon" in Zammad settings
- Verify user has correct email in Keycloak

---

## SUMMARY OF KEYCLOAK SETTINGS

```
Realm: webgenix
Client ID: zammad
Client Secret: [From Keycloak Credentials tab]
Redirect URIs: http://localhost:8090/auth/openid_connect/callback
Post Logout URIs: http://localhost:8090
Web Origins: http://localhost:8090
Standard Flow: ON
Implicit Flow: OFF
Client Auth: ON
```

## SUMMARY OF ZAMMAD SETTINGS

```
Display Name: Webgenix SSO
Identifier: openid_connect
Issuer: http://192.168.1.37:8080/realms/webgenix
UID Field: sub
Scopes: openid email profile
PKCE: yes
Callback: http://localhost:8090/auth/openid_connect/callback
```

## SUMMARY OF DOCKER ENVIRONMENT VARIABLES

```
OPENID_CONNECT_CLIENT_ID: zammad
OPENID_CONNECT_CLIENT_SECRET: [From Keycloak Credentials]
OPENID_CONNECT_HTTP_VERIFY_NONE: true
OPENID_CONNECT_SSL_VERIFY_PEER: false
RUBY_SSL_VERIFY_NONE: true
NODE_TLS_REJECT_UNAUTHORIZED: 0
```

---

## NEXT STEPS

1. ✅ Verify Keycloak client is configured
2. ✅ Verify Zammad OpenID settings are saved
3. ✅ Docker environment variables are set
4. ✅ Services are restarted
5. ✅ Test login flow
6. ✅ Create test users in Keycloak
7. ✅ Test cross-application SSO
