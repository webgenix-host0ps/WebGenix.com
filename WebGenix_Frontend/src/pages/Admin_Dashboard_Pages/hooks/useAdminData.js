import { useState } from "react";
import keycloak from "../../../auth/keycloak";
import { serviceCategories } from "../../../data/services";

export default function useAdminData() {
  const user = keycloak.tokenParsed;

  // 🔐 Users (start with current user)
  const [users, setUsers] = useState([
    {
      id: user?.sub,
      name: user?.name || user?.preferred_username,
      email: user?.email,
      role: "admin",
      status: "active"
    }
  ]);

  // 🧩 Services
  const [services, setServices] = useState(
  serviceCategories.flatMap((category, catIndex) =>
    category.services.map((service, index) => ({
      id: `${catIndex}-${index}`,
      name: service.name,
      description: service.description || "",
      category: category.title,
      price: service.price || "N/A",
      status: "active"
    }))
  )
);

  // 🖥 Servers
  const [servers, setServers] = useState([]);

  // 💳 Billing
  const [invoices, setInvoices] = useState([]);

  // 🎫 Tickets
  const [tickets, setTickets] = useState([]);

  // 🔁 Actions

  const toggleUserStatus = (id) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "suspended" : "active" }
          : u
      )
    );
  };

  return {
    users,
    services,
    servers,
    invoices,
    tickets,

    setUsers,
    setServices,
    setServers,
    setInvoices,
    setTickets,

    toggleUserStatus
  };
}
