// Overview.jsx
import { useEffect, useState } from "react";
import keycloak from "../../../auth/keycloak";
import { authFetch } from "../../../utils/authFetch";

export default function Overview() {
  const [data, setData] = useState({ services: [], invoices: [], tickets: [] });
  const [loading, setLoading] = useState(true);
  const user = keycloak.tokenParsed;

  useEffect(() => {
    fetchDashboardData();
  }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const res = await authFetch("/api/client/dashboard");
//       const result = await res.json();
//       setData(result);
//     } catch (err) {
//       console.error("Dashboard fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };
const fetchDashboardData = async () => {
    try {
      const res = await authFetch("/api/client/dashboard");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };


  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="space-y-6 text-white">
      <div>
        <h1 className="text-xl font-semibold">Welcome, {user?.name || user?.preferred_username}</h1>
        <p className="text-gray-400 text-sm">Here’s your account overview</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Services" value={data.services.length} />
        <StatCard title="Invoices" value={data.invoices.length} />
        <StatCard title="Tickets" value={data.tickets.length} />
        <StatCard title="Active Services" value={data.services.filter(s => s.status === "active").length} />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-[#141414] border border-[#262626] p-4 rounded-xl">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}