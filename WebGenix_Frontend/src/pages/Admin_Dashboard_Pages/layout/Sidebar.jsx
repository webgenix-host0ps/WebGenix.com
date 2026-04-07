import { Link, useLocation } from "react-router-dom";
import Icon from "../../../components/ui/Icon";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: "layout" },
  { id: "users", label: "Users", icon: "users" },
  { id: "services", label: "Services", icon: "server" },
  { id: "tickets", label: "Tickets", icon: "ticket" },        // ← NEW
  { id: "profile", label: "Profile", icon: "user" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();

  return (
    <aside
      className={`flex flex-col bg-[#0f0f0f] border-r border-[#1a1a1a] transition-all
      ${collapsed ? "w-16" : "w-56"}`}
    >
      {/* Logo / Title */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-[#1a1a1a]">
        {!collapsed && <span className="text-white font-semibold">Admin</span>}
        <button onClick={onToggle} className="text-gray-400 hover:text-white">
          <Icon name={collapsed ? "chevron-right" : "x"} size={16} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname.includes(item.id);
          return (
            <Link
              key={item.id}
              to={`/admin/dashboard/${item.id}`}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm
              ${
                isActive
                  ? "bg-blue-500/10 text-blue-400"
                  : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              <Icon name={item.icon} size={18} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Optional footer */}
      <div className="p-3 border-t border-[#1a1a1a] text-xs text-gray-500 text-center">
        {!collapsed && "Webgenix Admin"}
      </div>
    </aside>
  );
}