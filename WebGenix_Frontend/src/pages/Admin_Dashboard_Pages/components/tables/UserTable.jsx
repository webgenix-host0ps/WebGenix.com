import { useNavigate } from "react-router-dom";
import StatusBadge from "../ui/StatusBadge";

export default function UserTable({ users, onToggleStatus }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
      <table className="w-full text-sm">

        <thead>
          <tr className="border-b border-[#1a1a1a] text-[#525252]">
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-[#1a1a1a]">

              <td className="px-4 py-3 text-white">
                {u.name}
              </td>

              <td className="px-4 py-3 text-[#a1a1a1]">
                {u.email}
              </td>

              <td className="px-4 py-3 text-[#a1a1a1]">
                {u.role}
              </td>

              <td className="px-4 py-3">
                <StatusBadge status={u.status} />
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-3">

                  {/* View Button */}
                  <button
                    onClick={() => navigate(`/admin/dashboard/users/${u.id}`)}
                    className="text-xs text-green-400 hover:underline"
                  >
                    View
                  </button>

                  {/* Toggle Status */}
                  <button
                    onClick={() => onToggleStatus(u.id)}
                    className="text-xs text-blue-400 hover:underline"
                  >
                    {u.status === "active" ? "Suspend" : "Activate"}
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}