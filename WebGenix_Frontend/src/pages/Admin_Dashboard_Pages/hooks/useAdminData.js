import { useState } from "react";
import keycloak from "../../../auth/keycloak";
import { serviceCategories } from "../../../data/services";

export default function useAdminData() {
  const user = keycloak.tokenParsed;

  // 👤 Users (Keycloak-based)
  const [users, setUsers] = useState([
    {
      id: user?.sub,
      name: user?.name || user?.preferred_username,
      email: user?.email,
      role: "admin",
      status: "active"
    }
  ]);

  // 🔁 Toggle user status
  const toggleUserStatus = (id) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === id
          ? {
              ...u,
              status: u.status === "active" ? "suspended" : "active"
            }
          : u
      )
    );
  };

  // 🧩 Services (from serviceCategories)
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

  // 🎫 Tickets (placeholder for next step)
  const [tickets, setTickets] = useState([]);

  // 💳 Invoices (placeholder)
  const [invoices, setInvoices] = useState([]);

  // 🖥 Servers (placeholder)
  const [servers, setServers] = useState([]);

  // ⚙️ Settings
  const [settings, setSettings] = useState({
    appName: "WebGenix",
    supportEmail: "support@webgenix.com",
    darkMode: true,
    notifications: true,
    autoBackup: false
  });

  // 📦 Return all global state
  return {
    // Users
    users,
    setUsers,
    toggleUserStatus,

    // Services
    services,
    setServices,

    // Tickets
    tickets,
    setTickets,

    // Invoices
    invoices,
    setInvoices,

    // Servers
    servers,
    setServers,

    // Settings
    settings,
    setSettings
  };
}