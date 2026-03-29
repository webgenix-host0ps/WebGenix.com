import keycloak from "../../../auth/keycloak";
import Icon from "../../../components/ui/Icon";

export default function Topbar() {
  const user = keycloak.tokenParsed;

  const handleLogout = () => {
    keycloak.logout({
      redirectUri: window.location.origin
    });
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-[#1a1a1a]">
      
      <div>
        <p className="text-sm text-[#fafafa] font-semibold">
          Admin Dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-[#a1a1a1]">
          {user?.preferred_username}
        </span>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-xs text-[#525252] hover:text-white"
        >
          <Icon name="power" size={14} />
          Logout
        </button>
      </div>
    </header>
  );
}
