// src/pages/Client_Dashboard_Pages/pages/Tickets.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authFetch } from '../../../utils/authFetch';
import Icon from '../../../components/ui/Icon';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    subject: '',
    description: '',
    department: 'technical',
    priority: 'normal',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Fetch tickets on load
  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await authFetch('/api/tickets');
      const data = await res.json();
      // API returns { data: [...], pagination: {...} }
      setTickets(data.data || []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load tickets');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.subject.trim() || !form.description.trim()) {
      setError('Subject and description are required');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await authFetch('/api/tickets', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setShowModal(false);
        setForm({ subject: '', description: '', department: 'technical', priority: 'normal' });
        fetchTickets(); // refresh list
      } else {
        const err = await res.json();
        setError(err.error || 'Failed to create ticket');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      open: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      in_progress: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      resolved: 'bg-green-500/10 text-green-400 border-green-500/20',
      closed: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
      pending_customer: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    };
    const label = status.replace('_', ' ');
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[status] || styles.open}`}>
        {label}
      </span>
    );
  };

  return (
    <div className="space-y-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Support Tickets</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage your support requests</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center gap-2"
        >
          <Icon name="plus" size={16} />
          New Ticket
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Tickets list */}
      {loading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-[#111] border border-[#1e1e1e] rounded-xl animate-pulse" />
          ))}
        </div>
      ) : tickets.length === 0 ? (
        <div className="text-center py-16 bg-[#111] border border-[#1e1e1e] rounded-xl">
          <Icon name="message-circle" size={40} className="text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">No tickets yet</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 text-blue-400 text-sm hover:underline"
          >
            Create your first ticket
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <Link
              key={ticket.id}
              to={`/client/dashboard/tickets/${ticket.id}`}
              className="block bg-[#111] border border-[#1e1e1e] rounded-xl p-4 hover:border-blue-500/30 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-blue-400">{ticket.ticketId}</span>
                    {getStatusBadge(ticket.status)}
                    <span className="text-xs text-gray-500 capitalize">{ticket.priority}</span>
                  </div>
                  <h3 className="font-medium">{ticket.subject}</h3>
                  <p className="text-sm text-gray-400 line-clamp-1 mt-1">{ticket.description}</p>
                </div>
                <Icon name="chevron-right" size={18} className="text-gray-600 flex-shrink-0" />
              </div>
              <div className="mt-3 text-xs text-gray-500">
                Created {new Date(ticket.createdAt).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* New Ticket Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-[#141414] border border-[#262626] rounded-2xl w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center p-5 border-b border-[#1a1a1a]">
              <h2 className="text-lg font-semibold">New Support Ticket</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                <Icon name="x" size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Subject *</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Brief description of your issue"
                  className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description *</label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Provide detailed information about your issue..."
                  className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Department</label>
                  <select
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="technical">Technical</option>
                    <option value="billing">Billing</option>
                    <option value="sales">Sales</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Priority</label>
                  <select
                    value={form.priority}
                    onChange={(e) => setForm({ ...form, priority: e.target.value })}
                    className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              {error && <div className="text-red-400 text-sm">{error}</div>}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-[#262626] rounded-lg text-sm hover:bg-[#1a1a1a]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg text-sm font-medium"
                >
                  {submitting ? 'Creating...' : 'Create Ticket'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}