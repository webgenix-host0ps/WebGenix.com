import axios from "axios";

// ✅ axios instance with baseURL
const api = axios.create({
  baseURL: process.env.ZAMMAD_URL,
  headers: {
    Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
    "Content-Type": "application/json"
  }
});

// 🔍 Find user
export const findZammadUser = async (email) => {
  const url = `${process.env.ZAMMAD_URL}/users/search?query=${email}`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
      "Content-Type": "application/json"
    }
  });
  return res.data;
};

// ➕ Create user
export const createZammadUser = async ({ name, email, role }) => {
  const url = `${process.env.ZAMMAD_URL}/users`;

  return axios.post(url, {
    firstname: name || "User",
    lastname: "User",
    email: email,
    login: email,
    roles: mapRole(role)
  }, {
    headers: {
      Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
      "Content-Type": "application/json"
    }
  });
};

// 🎯 Role mapping
const mapRole = (role) => {
  if (role === "admin") return ["Admin"];
  if (role === "support") return ["Agent"];
  return ["Customer"];
};