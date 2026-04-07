// src/pages/Support_Dashboard_Pages/pages/MyAssignedTickets.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authFetch } from '../../../utils/authFetch';
import Icon from '../../../components/ui/Icon';

export default function MyAssignedTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTickets = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await authFetch('/api/tickets/support/assigned-to-me');
      
      if (res.status === 403) {
        setError('You do not have support access. Please contact administrator.');
        setTickets([]);
        return;
      }
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      
      const data = await res.json();
      // Ensure data is an array
      setTickets(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load assigned tickets');
      setTickets([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await authFetch(`/api/tickets/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ status: newStatus }),
      });
      fetchTickets();
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      open: 'bg-blue-500/10 text-blue-400',
      in_progress: 'bg-purple-500/10 text-purple-400',
      resolved: 'bg-green-500/10 text-green-400',
      closed: 'bg-gray-500/10 text-gray-400',
      pending_customer: 'bg-yellow-500/10 text-yellow-400',
    };
    return <span className={`px-2 py-0.5 rounded-full text-xs ${styles[status] || styles.open}`}>{status?.replace('_', ' ') || status}</span>;
  };

  if (loading) return <div className="text-white p-6">Loading assigned tickets...</div>;

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-white">My Assigned Tickets</h1>
          <p className="text-gray-500 text-sm mt-1">Tickets currently assigned to you</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
          <Icon name="alert-circle" size={40} className="text-red-400 mx-auto mb-3" />
          <p className="text-red-400">{error}</p>
          <p className="text-gray-500 text-sm mt-2">You need support or admin role to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">My Assigned Tickets</h1>
        <p className="text-gray-500 text-sm mt-1">Tickets currently assigned to you</p>
      </div>

      {tickets.length === 0 ? (
        <div className="text-center py-16 bg-[#111] border border-[#1e1e1e] rounded-xl">
          <Icon name="user-check" size={40} className="text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">No tickets assigned to you</p>
          <p className="text-gray-600 text-sm mt-1">Tickets assigned to you will appear here</p>
        </div>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="flex justify-between items-start">
                <Link to={`/support/dashboard/ticket/${ticket.id}`} className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-blue-400">{ticket.ticketId}</span>
                    {getStatusBadge(ticket.status)}
                    <span className="text-xs text-gray-500 capitalize">{ticket.priority}</span>
                  </div>
                  <p className="font-medium text-white">{ticket.subject}</p>
                  <p className="text-sm text-gray-400 line-clamp-1 mt-1">{ticket.description}</p>
                  <div className="text-xs text-gray-500 mt-2">From: {ticket.email}</div>
                </Link>
                <div className="flex gap-2 ml-4">
                  <select
                    onChange={(e) => updateStatus(ticket.id, e.target.value)}
                    value={ticket.status}
                    className="text-xs bg-[#1a1a1a] border border-[#262626] rounded-lg px-2 py-1 text-white"
                  >
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