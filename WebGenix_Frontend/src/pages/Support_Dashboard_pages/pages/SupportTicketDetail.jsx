// src/pages/Support_Dashboard_Pages/pages/SupportTicketDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { authFetch } from '../../../utils/authFetch';
import Icon from '../../../components/ui/Icon';

export default function SupportTicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [isInternal, setIsInternal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');

  const fetchTicket = async () => {
    setLoading(true);
    try {
      const res = await authFetch(`/api/tickets/${id}`);
      if (!res.ok) throw new Error('Ticket not found');
      const data = await res.json();
      setTicket(data);
      setMessages(data.messages || []);
    } catch (err) {
      console.error(err);
      navigate('/support/dashboard/all-tickets');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, [id]);

  const submitReply = async () => {
    if (!replyText.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await authFetch(`/api/tickets/${id}/messages`, {
        method: 'POST',
        body: JSON.stringify({ body: replyText, isInternal }),
      });
      if (res.ok) {
        setReplyText('');
        fetchTicket();
      } else {
        const err = await res.json();
        setError(err.error || 'Failed to send reply');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setSubmitting(false);
    }
  };

  const updateTicket = async (updates) => {
    setUpdating(true);
    try {
      await authFetch(`/api/tickets/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
      fetchTicket();
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const assignToMe = async () => {
    const user = window.keycloak?.tokenParsed;
    if (user?.sub) {
      await updateTicket({ assignedTo: user.sub });
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
    return <span className={`px-2 py-0.5 rounded-full text-xs ${styles[status] || styles.open}`}>{status.replace('_', ' ')}</span>;
  };

  if (loading) return <div className="text-white p-6">Loading ticket...</div>;
  if (!ticket) return null;

  return (
    <div className="space-y-6 text-white max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm text-blue-400">{ticket.ticketId}</span>
            {getStatusBadge(ticket.status)}
            <span className="text-xs text-gray-500 capitalize">{ticket.priority}</span>
          </div>
          <h1 className="text-xl font-semibold">{ticket.subject}</h1>
          <p className="text-xs text-gray-500 mt-1">
            Created {new Date(ticket.createdAt).toLocaleString()} • Department: {ticket.department}
          </p>
          <p className="text-xs text-gray-500">Customer: {ticket.email} • User ID: {ticket.userId}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('/support/dashboard/all-tickets')}
            className="text-sm text-gray-400 hover:text-white flex items-center gap-1 px-3 py-1.5 border border-[#262626] rounded-lg"
          >
            <Icon name="arrow-left" size={14} /> Back
          </button>
        </div>
      </div>

      {/* Ticket Management Panel */}
      <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5">
        <h3 className="text-sm font-semibold mb-3">Manage Ticket</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Status</label>
            <select
              value={ticket.status}
              onChange={(e) => updateTicket({ status: e.target.value })}
              disabled={updating}
              className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="pending_customer">Pending Customer</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Priority</label>
            <select
              value={ticket.priority}
              onChange={(e) => updateTicket({ priority: e.target.value })}
              disabled={updating}
              className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Department</label>
            <select
              value={ticket.department}
              onChange={(e) => updateTicket({ department: e.target.value })}
              disabled={updating}
              className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="technical">Technical</option>
              <option value="billing">Billing</option>
              <option value="sales">Sales</option>
              <option value="general">General</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Assigned To</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={ticket.assignedTo || 'Unassigned'}
                readOnly
                className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-1.5 text-sm w-32"
              />
              <button
                onClick={assignToMe}
                disabled={updating}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs"
              >
                Assign to Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">{error}</div>}

      {/* Conversation Thread */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Conversation History</h3>
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No messages yet.</div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                msg.senderRole === 'client'
                  ? 'bg-[#111] border-[#262626] ml-0 mr-8'
                  : msg.isInternal
                  ? 'bg-yellow-500/5 border-yellow-500/20 ml-8 mr-8'
                  : 'bg-[#1a1a1a] border-[#3b82f6]/20 ml-8 mr-0'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    msg.senderRole === 'client' ? 'bg-blue-500/20 text-blue-400' : 
                    msg.isInternal ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {msg.senderRole === 'client' ? 'C' : msg.isInternal ? 'N' : 'S'}
                  </div>
                  <span className="text-sm font-medium">{msg.sender}</span>
                  <span className="text-xs text-gray-500">
                    {msg.senderRole === 'client' ? 'Customer' : msg.isInternal ? 'Internal Note' : 'Support'}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">{msg.body}</p>
            </div>
          ))
        )}
      </div>

      {/* Reply Form */}
      <div className="bg-[#111] border border-[#262626] rounded-xl p-5">
        <label className="block text-sm font-medium mb-2">Add Reply</label>
        <textarea
          rows={4}
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Type your message here..."
          className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <div className="flex justify-between items-center mt-3">
          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={isInternal}
              onChange={(e) => setIsInternal(e.target.checked)}
              className="rounded border-[#262626] bg-[#0f0f0f]"
            />
            Internal note (customer won't see this)
          </label>
          <button
            onClick={submitReply}
            disabled={submitting || !replyText.trim()}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            {submitting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Icon name="send" size={14} />}
            Send {isInternal ? 'Note' : 'Reply'}
          </button>
        </div>
      </div>
    </div>
  );
}