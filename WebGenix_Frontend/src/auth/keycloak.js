import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "webgenix",
  clientId: "webgenix-frontend",
});

export default keycloak;