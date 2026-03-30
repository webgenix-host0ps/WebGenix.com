// import { createTicket, getTickets } from "../services/zammadService.js";

export const createNewTicket = async (req, res) => {
  const user = req.user;

  try {
    const ticket = await createTicket({
      title: req.body.title,
      description: req.body.description,
      email: user.email
    });

    res.json(ticket.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ticket creation failed" });
  }
};

export const fetchTickets = async (req, res) => {
  const user = req.user;
  const roles = user.realm_access?.roles || [];

  try {
    const response = await getTickets();

    // 🔴 IMPORTANT FIX
    let tickets = response?.data || [];

    // Ensure it's always array
    if (!Array.isArray(tickets)) {
      tickets = [];
    }

    // Role filter
    if (roles.includes("client")) {
      tickets = tickets.filter(
        t => t.customer?.email === user.email
      );
    }

    res.json(tickets);

  } catch (err) {
    console.error("Zammad Error:", err.response?.data || err.message);

    // 🔴 RETURN SAFE RESPONSE
    res.json([]);
  }
};
