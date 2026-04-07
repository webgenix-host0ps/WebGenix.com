// src/pages/Client_Dashboard_Pages/layout/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import Icon from "../../../components/ui/Icon";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: "layout" },
  { id: "services", label: "My Services", icon: "server" },
  { id: "invoices", label: "Invoices", icon: "file-text" },
  { id: "tickets", label: "Support Tickets", icon: "message-circle" },  // NEW
  { id: "profile", label: "Profile", icon: "users" },
  { id: "marketplace", label: "Marketplace", icon: "shopping-cart" },
];

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();

  return (
    <aside
      className={`flex flex-col bg-[#0f0f0f] border-r border-[#1a1a1a]
      ${collapsed ? "w-16" : "w-56"} transition-all`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-[#1a1a1a]">
        {!collapsed && <span className="text-white font-semibold">Client</span>}
        <button onClick={onToggle}>
          <Icon name={collapsed ? "chevron-right" : "x"} size={16} />
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname.includes(item.id);
          return (
            <Link
              key={item.id}
              to={`/client/dashboard/${item.id}`}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm
              ${
                isActive
                  ? "bg-blue-500/10 text-blue-400"
                  : "text-gray-400 hover:bg-[#1a1a1a]"
              }`}
            >
              <Icon name={item.icon} size={18} />
              {!collapsed && item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}