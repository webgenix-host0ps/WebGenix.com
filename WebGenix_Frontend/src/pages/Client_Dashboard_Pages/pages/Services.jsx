import { useEffect, useState } from "react";
import keycloak from "../../../auth/keycloak";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/client/services", {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      });

      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Services fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-white">Loading services...</div>;

  return (
    <div className="space-y-6 text-white">
      
      {/* Header */}
      <div>
        <h1 className="text-lg font-semibold">My Services</h1>
        <p className="text-sm text-gray-400">
          {services.length} services on your account
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="bg-[#141414] border border-[#262626] p-5 rounded-xl"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-medium">{svc.name}</h2>
              <StatusBadge status={svc.status} />
            </div>

            {/* Info */}
            <div className="text-sm text-gray-400 space-y-1">
              <p>Price: {svc.price}</p>
              <p>Next Due: {svc.nextDue}</p>
              <p>Server: {svc.server || "—"}</p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              {svc.status === "active" && (
                <button className="text-blue-400 text-sm hover:underline">
                  Manage
                </button>
              )}

              {svc.status === "suspended" && (
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                  Reactivate
                </button>
              )}

              {svc.status === "expiring" && (
                <button className="px-3 py-1 bg-yellow-500 text-black text-xs rounded">
                  Renew
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Status Badge */
function StatusBadge({ status }) {
  const styles = {
    active: "text-green-400",
    suspended: "text-red-400",
    expiring: "text-yellow-400",
  };

  return (
    <span className={`text-xs ${styles[status] || "text-gray-400"}`}>
      {status}
    </span>
  );
}
