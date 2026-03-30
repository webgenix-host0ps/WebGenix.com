import { createZammadUser, findZammadUser } from "../services/zammadService.js";

export const syncUser = async (req, res) => {
  const user = req.user;

  try {
    // 🔍 Check if user already exists
    const existingUsers = await findZammadUser(user.email);

    if (existingUsers.length > 0) {
      return res.json({
        message: "User already exists in Zammad"
      });
    }

    // ➕ Create new user
    await createZammadUser({
      name: user.name,
      email: user.email
    });

    res.json({
      message: "User created in Zammad"
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "User sync failed"
    });
  }
};
