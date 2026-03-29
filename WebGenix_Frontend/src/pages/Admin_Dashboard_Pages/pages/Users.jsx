import { useState } from "react";
import keycloak from "../../../auth/keycloak";
import UserTable from "../components/tables/UserTable";

export default function Users() {
  const user = keycloak.tokenParsed;

  const [users, setUsers] = useState([
    {
      id: user?.sub,
      name: user?.name || user?.preferred_username,
      email: user?.email,
      role: "admin",
      status: "active"
    }
  ]);

  const toggleStatus = (id) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "suspended" : "active" }
          : u
      )
    );
  };

  return (
    <div>
      <h1 className="text-xl text-white font-semibold mb-4">
        Users Management
      </h1>

      <UserTable users={users} onToggleStatus={toggleStatus} />
    </div>
  );
}
