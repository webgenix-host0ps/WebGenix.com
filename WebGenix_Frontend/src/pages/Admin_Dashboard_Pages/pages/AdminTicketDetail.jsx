// src/pages/Admin_Dashboard_Pages/AdminTicketDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { authFetch } from '../../../utils/authFetch';
import Icon from '../../../components/ui/Icon';

export default function AdminTicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [internalNote, setInternalNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchTicket = async () => {
    setLoading(true);
    try {
      // Use admin endpoint
      const res = await authFetch(`/api/tickets/admin/tickets/${id}`);
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || 'Failed to fetch ticket');
      }
      const data = await res.json(); // <-- assign to 'data'
      setTicket(data);
      setMessages(data.messages || []);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitReply = async (isInternal = false) => {
    const bodyText = isInternal ? internalNote : replyText;
    if (!bodyText.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await authFetch(`/api/tickets/${id}/messages`, {
        method: 'POST',
        body: JSON.stringify({ body: bodyText, isInternal }),
      });
      if (res.ok) {
        if (isInternal) setInternalNote('');
        else setReplyText('');
        fetchTicket(); // refresh conversation
      } else {
        const err = await res.json();
        setError(err.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, [id]);

  if (loading) return <div className="text-white p-6">Loading ticket...</div>;
  if (!ticket) return <div className="text-white p-6">Ticket not found</div>;

  const statusColor = {
    open: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    in_progress: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    resolved: 'bg-green-500/10 text-green-400 border-green-500/20',
    closed: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    pending_customer: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  }[ticket.status] || 'bg-gray-500/10 text-gray-400';

  return (
    <div className="space-y-6 text-white max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm text-blue-400">{ticket.ticketId}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${statusColor}`}>
              {ticket.status.replace('_', ' ')}
            </span>
            <span className="text-xs text-gray-400">• {ticket.priority}</span>
          </div>
          <h1 className="text-xl font-semibold">{ticket.subject}</h1>
          <p className="text-xs text-gray-500 mt-1">
            Created {new Date(ticket.createdAt).toLocaleString()} • Department: {ticket.department}
            {ticket.assignedTo && ` • Assigned to: ${ticket.assignedTo}`}
          </p>
        </div>
        <button
          onClick={() => navigate('/admin/dashboard/tickets')}
          className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
        >
          <Icon name="arrow-left" size={14} /> Back to tickets
        </button>
      </div>

      {/* Error */}
      {error && <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">{error}</div>}

      {/* Conversation thread */}
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No messages yet.</div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                msg.isInternal
                  ? 'bg-yellow-500/5 border-yellow-500/20'
                  : msg.senderRole === 'client'
                  ? 'bg-[#111] border-[#262626] ml-0 mr-8'
                  : 'bg-[#1a1a1a] border-[#3b82f6]/20 ml-8 mr-0'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    msg.isInternal
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : msg.senderRole === 'client'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {msg.isInternal ? 'N' : msg.senderRole === 'client' ? 'C' : 'S'}
                  </div>
                  <span className="text-sm font-medium">{msg.sender}</span>
                  <span className="text-xs text-gray-500">
                    {msg.senderRole === 'client' ? 'Client' : msg.senderRole === 'admin' ? 'Admin' : 'Support'}
                    {msg.isInternal && ' (Internal Note)'}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">{msg.body}</p>
            </div>
          ))
        )}
      </div>

      {/* Reply form (public) */}
      <div className="bg-[#111] border border-[#262626] rounded-xl p-5">
        <label className="block text-sm font-medium mb-2">Write your reply</label>
        <textarea
          rows={3}
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Type your message here..."
          className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={() => submitReply(false)}
            disabled={submitting || !replyText.trim()}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            {submitting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Icon name="send" size={14} />}
            Send reply
          </button>
        </div>
      </div>

      {/* Internal note form (admin only) */}
      <div className="bg-[#111] border border-yellow-500/20 rounded-xl p-5">
        <label className="block text-sm font-medium mb-2 text-yellow-400">Add internal note (only visible to staff)</label>
        <textarea
          rows={2}
          value={internalNote}
          onChange={(e) => setInternalNote(e.target.value)}
          placeholder="Internal notes for other support agents..."
          className="w-full bg-[#0f0f0f] border border-yellow-500/20 rounded-lg p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={() => submitReply(true)}
            disabled={submitting || !internalNote.trim()}
            className="px-5 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            {submitting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Icon name="lock" size={14} />}
            Add internal note
          </button>
        </div>
      </div>
    </div>
  );
}