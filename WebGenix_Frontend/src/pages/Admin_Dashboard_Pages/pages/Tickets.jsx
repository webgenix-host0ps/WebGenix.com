import { useEffect, useState } from "react";
import keycloak from "../../../auth/keycloak";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const token = keycloak.token;

  // 📥 Fetch tickets from backend
  const fetchTickets = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tickets", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      setTickets(data);
    } catch (err) {
      console.error("Error fetching tickets:", err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // ➕ Create ticket
  const handleAddTicket = async () => {
    if (!title) return;

    try {
      await fetch("http://localhost:5000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title,
          description: "Created from dashboard",
          priority
        })
      });

      setTitle("");
      setPriority("low");

      fetchTickets(); // refresh list
    } catch (err) {
      console.error("Error creating ticket:", err);
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-xl text-white font-semibold">
        Support Tickets
      </h1>

      {/* Create Ticket */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 space-y-3">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Ticket title"
          className="w-full bg-[#0f0f0f] border border-[#262626] rounded px-3 py-2 text-white"
        />

        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="w-full bg-[#0f0f0f] border border-[#262626] rounded px-3 py-2 text-white"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          onClick={handleAddTicket}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Ticket
        </button>
      </div>

      {/* Ticket List */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
        <table className="w-full text-sm">

          <thead>
            <tr className="border-b border-[#1a1a1a] text-[#525252]">
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center py-6 text-[#525252]">
                  No tickets found
                </td>
              </tr>
            ) : (
              tickets.map(t => (
                <tr key={t.id} className="border-b border-[#1a1a1a]">
                  <td className="px-4 py-3 text-white">{t.title}</td>
                  <td className="px-4 py-3 text-green-400">{t.state}</td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}