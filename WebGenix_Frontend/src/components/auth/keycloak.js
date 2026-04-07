import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://192.168.1.37:8080",
  realm: "webgenix",
  clientId: "webgenix-frontend",
});

export default keycloak;