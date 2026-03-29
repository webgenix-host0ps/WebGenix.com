import { useParams, useNavigate } from "react-router-dom";
import { useAdmin } from "../hooks/AdminContext";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { users } = useAdmin();

  // ✅ Get real user from global state
  const currentUser = users.find(u => u.id === id);

  if (!currentUser) {
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
          <p className={`${
            currentUser.status === "active"
              ? "text-green-400"
              : "text-red-400"
          }`}>
            {currentUser.status}
          </p>
        </div>

      </div>
    </div>
  );
}