import { useNavigate } from "react-router-dom";
import Icon from "../../../components/ui/Icon";
import keycloak from "../../../auth/keycloak";

export default function Topbar() {
  const navigate = useNavigate();

  const user = keycloak.tokenParsed;

  const handleLogout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-[#1a1a1a] bg-[#0a0a0a]">
      
      {/* Left */}
      <h2 className="text-sm font-semibold text-white">
        Client Dashboard
      </h2>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <button className="p-2 text-gray-400 hover:text-white">
          <Icon name="activity" size={16} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
            {user?.name?.[0] || "U"}
          </div>

          <span className="text-sm text-gray-300 hidden sm:block">
            {user?.name || user?.preferred_username}
          </span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
        >
          <Icon name="power" size={14} />
          Logout
        </button>
      </div>
    </header>
  );
}
