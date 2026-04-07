// src/pages/Support_Dashboard_Pages/pages/Overview.jsx
import { useState, useEffect } from 'react';
import { authFetch } from '../../../utils/authFetch';
import Icon from '../../../components/ui/Icon';

export default function SupportOverview() {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    urgent: 0,
    assignedToMe: 0,
  });
  const [recentTickets, setRecentTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentTickets();
  }, []);

  const fetchStats = async () => {
    try {
      // Get all tickets to calculate stats
      const res = await authFetch('/api/tickets?limit=1000');
      const data = await res.json();
      const tickets = data.data || [];
      
      const user = window.keycloak?.tokenParsed;
      const assignedToMe = tickets.filter(t => t.assignedTo === user?.sub).length;
      
      setStats({
        total: tickets.length,
        open: tickets.filter(t => t.status === 'open').length,
        inProgress: tickets.filter(t => t.status === 'in_progress').length,
        resolved: tickets.filter(t => t.status === 'resolved').length,
        urgent: tickets.filter(t => t.priority === 'urgent' && t.status !== 'resolved').length,
        assignedToMe,
      });
    } catch (err) {
      console.error('Stats error:', err);
    }
  };

  const fetchRecentTickets = async () => {
    try {
      const res = await authFetch('/api/tickets?limit=10');
      const data = await res.json();
      setRecentTickets(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
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

  const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon name={icon} size={20} />
        </div>
      </div>
    </div>
  );

  if (loading) return <div className="text-white p-6">Loading dashboard...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Support Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Monitor and manage all support tickets</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard title="Total Tickets" value={stats.total} icon="ticket" color="bg-blue-500/20 text-blue-400" />
        <StatCard title="Open" value={stats.open} icon="alert-circle" color="bg-orange-500/20 text-orange-400" />
        <StatCard title="In Progress" value={stats.inProgress} icon="loader" color="bg-purple-500/20 text-purple-400" />
        <StatCard title="Resolved" value={stats.resolved} icon="check-circle" color="bg-green-500/20 text-green-400" />
        <StatCard title="Urgent" value={stats.urgent} icon="alert-triangle" color="bg-red-500/20 text-red-400" />
        <StatCard title="Assigned to Me" value={stats.assignedToMe} icon="user" color="bg-cyan-500/20 text-cyan-400" />
      </div>

      {/* Recent Tickets */}
      <div className="bg-[#111] border border-[#1e1e1e] rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#1a1a1a]">
          <h2 className="text-white font-semibold">Recent Tickets</h2>
        </div>
        <div className="divide-y divide-[#1a1a1a]">
          {recentTickets.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No tickets found</div>
          ) : (
            recentTickets.map((ticket) => (
              <div key={ticket.id} className="px-5 py-3 hover:bg-[#1a1a1a] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-blue-400">{ticket.ticketId}</span>
                      {getStatusBadge(ticket.status)}
                      <span className="text-xs text-gray-500 capitalize">{ticket.priority}</span>
                    </div>
                    <p className="text-white text-sm font-medium">{ticket.subject}</p>
                    <p className="text-gray-500 text-xs mt-1">From: {ticket.email}</p>
                  </div>
                  <a
                    href={`/support/dashboard/ticket/${ticket.id}`}
                    className="text-blue-400 text-sm hover:underline"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}