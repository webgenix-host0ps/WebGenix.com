import { useParams, useNavigate } from "react-router-dom";
import keycloak from "../../../auth/keycloak";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = keycloak.tokenParsed;

  // Since no backend → match with current user
  const currentUser = {
    id: user?.sub,
    name: user?.name || user?.preferred_username,
    email: user?.email,
    role: "admin",
    status: "active"
  };

  if (id !== currentUser.id) {
    return (
      <div className="text-red-400">
        User not found
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-400 mb-4"
      >
        ← Back
      </button>

      <h1 className="text-xl text-white font-semibold mb-6">
        User Details
      </h1>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4">
        <div>
          <p className="text-xs text-[#525252]">Name</p>
          <p className="text-white">{currentUser.name}</p>
        </div>

        <div>
          <p className="text-xs text-[#525252]">Email</p>
          <p className="text-white">{currentUser.email}</p>
        </div>

        <div>
          <p className="text-xs text-[#525252]">Role</p>
          <p className="text-white">{currentUser.role}</p>
        </div>

        <div>
          <p className="text-xs text-[#525252]">Status</p>
          <p className="text-white">{currentUser.status}</p>
        </div>
      </div>
    </div>
  );
}
