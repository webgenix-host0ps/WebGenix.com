import axios from "axios";

const api = axios.create({
  baseURL: process.env.ZAMMAD_URL,
  headers: {
    Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
    "Content-Type": "application/json"
  }
});

// 🔍 Check if user exists
export const findZammadUser = async (email) => {
  const res = await api.get(`/users/search?query=${email}`);
  return res.data;
};

// Create User
export const createZammadUser = async (user) => {
  return api.post("/users", {
    firstname: user.name,
    email: user.email,
    login: user.email
  });
};

// Create Ticket
export const createTicket = async (data) => {
  return api.post("/tickets", {
    title: data.title,
    group: "Users",
    customer: data.email,
    article: {
      subject: data.title,
      body: data.description,
      type: "note",
      internal: false
    }
  });
};

// Get Tickets
export const getTickets = async () => {
  return api.get("/tickets");
};
