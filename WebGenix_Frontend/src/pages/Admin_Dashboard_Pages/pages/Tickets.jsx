import { useEffect, useState } from "react";
import keycloak from "../../../auth/keycloak";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // 📥 Fetch tickets
  const fetchTickets = async () => {
    try {
      setLoading(true);

      await keycloak.updateToken(30);

      const res = await fetch("http://localhost:5000/api/tickets", {
        headers: {
          Authorization: `Bearer ${keycloak.token}`
        }
      });

      const data = await res.json();

      // ✅ Always ensure array
      if (Array.isArray(data)) {
        setTickets(data);
      } else {
        console.error("Invalid data:", data);
        setTickets([]);
      }

    } catch (err) {
      console.error("Fetch error:", err);
      setTickets([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // ➕ Create ticket
  const createTicket = async () => {
    if (!title) return;

    try {
      await keycloak.updateToken(30);

      await fetch("http://localhost:5000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${keycloak.token}`
        },
        body: JSON.stringify({
          title,
          description: "Created from dashboard"
        })
      });

      setTitle("");
      fetchTickets();

    } catch (err) {
      console.error("Create ticket error:", err);
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-xl text-white font-semibold">
        Tickets (Zammad)
      </h1>

      {/* Create Ticket */}
      <div className="bg-[#141414] p-4 rounded-xl space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ticket title"
          className="w-full px-3 py-2 bg-black border border-[#262626] text-white rounded"
        />

        <button
          onClick={createTicket}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Create Ticket
        </button>
      </div>

      {/* Ticket List */}
      <div className="bg-[#141414] rounded-xl overflow-hidden">

        {loading ? (
          <div className="text-center py-6 text-gray-400">
            Loading tickets...
          </div>
        ) : tickets.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            No tickets found
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#525252] border-b border-[#1a1a1a]">
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">State</th>
                <th className="px-4 py-3 text-left">Customer</th>
              </tr>
            </thead>

            <tbody>
              {(Array.isArray(tickets) ? tickets : []).map((t) => (
                <tr key={t.id} className="border-b border-[#1a1a1a]">
                  <td className="px-4 py-3 text-white">{t.title}</td>
                  <td className="px-4 py-3 text-green-400">
                    {t.state || "N/A"}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {t.customer?.email || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

    </div>
  );
}