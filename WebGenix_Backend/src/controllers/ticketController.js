// controllers/ticketController.js
import { createTicket, getTickets } from "../services/zammadService.js";

export const createNewTicket = async (req, res) => {
  const user = req.user;
  try {
    const ticket = await createTicket({
      title: req.body.title,
      description: req.body.description,
      email: user.email,
    });
    res.json(ticket);
  } catch (err) {
    console.error("Ticket creation error:", err.response?.data || err.message);
    res.status(500).json({ error: "Ticket creation failed" });
  }
};

export const fetchTickets = async (req, res) => {
  const user = req.user;
  try {
    // For clients, fetch only their tickets; for admin/support, all tickets
    let tickets;
    if (user.realm_access?.roles?.includes("client")) {
      tickets = await getTickets(user.email);
    } else {
      tickets = await getTickets();
    }
    res.json(tickets);
  } catch (err) {
    console.error("Zammad Error:", err.response?.data || err.message);
    res.json([]); // safe fallback
  }
};