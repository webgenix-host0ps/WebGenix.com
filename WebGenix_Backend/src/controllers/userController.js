 import { createZammadUser, findZammadUser } from "../services/zammadService.js";

export const syncUser = async (req, res) => {
  try {
    const user = req.user;

    const email = user.email;
    const name = user.name || user.preferred_username;

    const roles = user.realm_access?.roles || [];

    let role = "client";

    // 🔥 KEYCLOAK ROLE MAP
    if (roles.includes("WebGenix_Admin_Role")) {
      role = "admin";
    } else if (roles.includes("support")) {
      role = "support";
    }

    // 🔍 check existing user
    const existing = await findZammadUser(email);

    if (existing.length > 0) {
      return res.json({ message: "User already exists" });
    }

    // ➕ create user
    await createZammadUser({
      name,
      email,
      role
    });

    return res.json({ message: "User created successfully" });

  }catch (err) {
  console.log("FULL ERROR:", err);
  console.log("RESPONSE:", err.response?.data);
  console.log("STATUS:", err.response?.status);

  return res.status(500).json({
    error: err.response?.data || err.message
  });
}
};


