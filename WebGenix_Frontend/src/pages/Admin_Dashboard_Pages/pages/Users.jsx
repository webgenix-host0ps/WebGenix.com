import { useAdmin } from "../hooks/AdminContext";
import UserTable from "../components/tables/UserTable";

export default function Users() {
  const { users, toggleUserStatus } = useAdmin();

  return (
    <div>
      <h1 className="text-xl text-white font-semibold mb-4">
        Users Management
      </h1>

      <UserTable users={users} onToggleStatus={toggleUserStatus} />
    </div>
  );
}