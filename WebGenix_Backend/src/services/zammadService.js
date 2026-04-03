// services/zammadService.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.ZAMMAD_URL,
  headers: {
    Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// Find user by email
export const findZammadUser = async (email) => {
  const res = await api.get(`/users/search?query=${email}`);
  return res.data;
};

// Create user
export const createZammadUser = async ({ name, email, role }) => {
  const firstname = name?.split(' ')[0] || "User";
  const lastname = name?.split(' ')[1] || "";
  const res = await api.post("/users", {
    firstname,
    lastname,
    email,
    login: email,
    roles: mapRole(role),
  });
  return res.data;
};

// Create ticket
export const createTicket = async ({ title, description, email }) => {
  // First find or create customer
  let customer = await findZammadUser(email);
  if (!customer || customer.length === 0) {
    customer = await createZammadUser({ name: email, email, role: "client" });
  }
  const customerId = Array.isArray(customer) ? customer[0]?.id : customer.id;

  const res = await api.post("/tickets", {
    title,
    group: "Users",
    customer_id: customerId,
    article: {
      subject: title,
      body: description,
      type: "email",
      internal: false,
    },
  });
  return res.data;
};

// Get tickets (optionally filter by user email)
export const getTickets = async (userEmail = null) => {
  const res = await api.get("/tickets");
  let tickets = res.data;
  if (userEmail) {
    // Find customer ID for email
    const users = await findZammadUser(userEmail);
    const customerId = users[0]?.id;
    if (customerId) {
      tickets = tickets.filter(t => t.customer_id === customerId);
    }
  }
  return tickets;
};

// Role mapping
const mapRole = (role) => {
  if (role === "admin") return ["Admin"];
  if (role === "support") return ["Agent"];
  return ["Customer"];
};