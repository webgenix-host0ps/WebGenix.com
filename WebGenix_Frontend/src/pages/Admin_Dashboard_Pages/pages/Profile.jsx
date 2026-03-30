import keycloak from "../../../auth/keycloak";

export default function Profile() {
  const user = keycloak.tokenParsed;

  // 🔄 Sync user to Zammad
  const syncUser = async () => {
    try {
      await keycloak.updateToken(30);

      const res = await fetch("http://localhost:5000/api/users/sync", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${keycloak.token}`
        }
      });

      const data = await res.json();

      console.log(data);
      alert(data.message || "Sync completed");

    } catch (err) {
      console.error("Sync error:", err);
      alert("Error syncing user");
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-xl text-white font-semibold">
        My Profile
      </h1>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-5">

        {/* Username */}
        <div>
          <p className="text-xs text-[#525252]">Username</p>
          <p className="text-white">
            {user?.preferred_username || "N/A"}
          </p>
        </div>

        {/* Full Name */}
        <div>
          <p className="text-xs text-[#525252]">Full Name</p>
          <p className="text-white">
            {user?.name || "N/A"}
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-xs text-[#525252]">Email</p>
          <p className="text-white">
            {user?.email || "N/A"}
          </p>
        </div>

        {/* User ID */}
        <div>
          <p className="text-xs text-[#525252]">User ID</p>
          <p className="text-white break-all">
            {user?.sub}
          </p>
        </div>

        {/* Roles */}
        <div>
          <p className="text-xs text-[#525252]">Roles</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            {user?.realm_access?.roles?.map((role, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* 🔥 Sync Button */}
        <div className="pt-4">
          <button
            onClick={syncUser}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded"
          >
            Sync User to Zammad
          </button>
        </div>

      </div>

    </div>
  );
}