import { useNavigate, useLocation } from "react-router-dom";
import Icon from "../../../components/ui/Icon";
import logo from "../../../assets/logo.png";

const NAV_ITEMS = [
  { path: "overview", label: "Overview", icon: "layout" },
  { path: "users", label: "Users", icon: "users" },
  { path: "services", label: "Services", icon: "box" },
  { path: "servers", label: "Servers", icon: "server" },
  { path: "billing", label: "Billing", icon: "file-text" },
  { path: "tickets", label: "Tickets", icon: "message-circle" },
  { path: "settings", label: "Settings", icon: "sliders" },
  { path: "profile", label: "Profile", icon: "user" },
];

export default function Sidebar({ collapsed, onToggle }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item) => {
    // 🔥 SPECIAL CASE → ZAMMAD
    if (item.path === "tickets") {
      window.location.href = "http://localhost:8090";
      return;
    }

    navigate(`/admin/dashboard/${item.path}`);
  };

  return (
    <aside className={`bg-[#0f0f0f] border-r border-[#1a1a1a] ${collapsed ? "w-16" : "w-56"} transition-all`}>
      
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[#1a1a1a]">
        {!collapsed && <img src={logo} className="h-7" />}
        <button onClick={onToggle}>
          <Icon name="menu" size={16} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-2 space-y-1">
        {NAV_ITEMS.map(item => {
          const active = location.pathname.includes(item.path);

          return (
            <button
              key={item.path}
              onClick={() => handleNavigation(item)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                active
                  ? "bg-[#3b82f6]/10 text-[#3b82f6]"
                  : "text-[#a1a1a1] hover:bg-[#1a1a1a]"
              }`}
            >
              <Icon name={item.icon} size={16} />
              {!collapsed && item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}