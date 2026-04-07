import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authFetch } from '../../../utils/authFetch';
import Icon from '../../../components/ui/Icon';

export default function AllTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '', priority: '', department: '' });

  const fetchTickets = async () => {
  setLoading(true);
  const params = new URLSearchParams(filter).toString();
  try {
    const res = await authFetch(`/api/tickets?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    setTickets(data.data || []);
  } catch (err) {
    console.error(err);
    setTickets([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchTickets();
  }, [filter]);

  const updateTicketStatus = async (id, newStatus) => {
    await authFetch(`/api/tickets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status: newStatus }),
    });
    fetchTickets();
  };

  const assignToMe = async (id) => {
    const user = window.keycloak?.tokenParsed;
    await authFetch(`/api/tickets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ assignedTo: user?.sub }),
    });
    fetchTickets();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-white">All Tickets</h1>
      <div className="flex gap-3 flex-wrap">
        <select className="bg-[#111] border border-[#262626] rounded-lg px-3 py-2 text-sm text-white" onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
          <option value="">All status</option>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
        <select className="bg-[#111] border border-[#262626] rounded-lg px-3 py-2 text-sm text-white" onChange={(e) => setFilter({ ...filter, priority: e.target.value })}>
          <option value="">All priority</option>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => <div key={i} className="h-20 bg-[#111] rounded-xl animate-pulse" />)}
        </div>
      ) : tickets.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No tickets found</div>
      ) : (
        <div className="space-y-3">
          {tickets.map(ticket => (
            <div key={ticket.id} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-4">
              <div className="flex justify-between items-start">
                <Link to={`/support/dashboard/ticket/${ticket.id}`} className="flex-1">
                  <div className="flex gap-2 items-center mb-1">
                    <span className="font-mono text-xs text-blue-400">{ticket.ticketId}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${ticket.status === 'open' ? 'bg-blue-500/10 text-blue-400' : 'bg-gray-500/10 text-gray-400'}`}>{ticket.status}</span>
                    <span className="text-xs text-gray-500 capitalize">{ticket.priority}</span>
                  </div>
                  <p className="font-medium">{ticket.subject}</p>
                  <p className="text-sm text-gray-400 truncate">{ticket.description}</p>
                  <div className="text-xs text-gray-500 mt-2">From: {ticket.email}</div>
                </Link>
                <div className="flex gap-2">
                  <button onClick={() => assignToMe(ticket.id)} className="text-xs px-2 py-1 bg-blue-500/20 rounded">Assign to me</button>
                  <select onChange={(e) => updateTicketStatus(ticket.id, e.target.value)} className="text-xs bg-[#1a1a1a] border border-[#262626] rounded px-2 py-1">
                    <option>Change status</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}