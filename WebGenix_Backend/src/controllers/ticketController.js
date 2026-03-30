import { createTicket, getTickets } from "../services/zammadService.js";

export const createNewTicket = async (req, res) => {
  const user = req.user;

  const ticket = await createTicket({
    title: req.body.title,
    description: req.body.description,
    email: user.email
  });

  res.json(ticket.data);
};

export const fetchTickets = async (req, res) => {
  const user = req.user;
  const role = user.realm_access.roles;

  const response = await getTickets();

  let tickets = response.data;

  // Role-based filtering
  if (role.includes("client")) {
    tickets = tickets.filter(t => t.customer === user.email);
  }

  res.json(tickets);
};
