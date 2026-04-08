// src/pages/Admin_Dashboard_Pages/pages/AdminTickets.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authFetch } from '../../../utils/authFetch';
import Icon from '../../../components/ui/Icon';

export default function AdminTickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    department: '',
    search: ''
  });
  const [pagination, setPagination] = useState({ 
    page: 1, 
    limit: 20,
    total: 0,
    pages: 0
  });
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkAction, setBulkAction] = useState({ type: '', value: '' });

  // Helper to safely extract JSON from authFetch
  const safeFetch = async (url, options = {}) => {
    const response = await authFetch(url, options);
    // If authFetch already returns parsed JSON, response is the data.
    // If it returns a Response object, parse it.
    if (response && typeof response.json === 'function') {
      const data = await response.json();
      console.log(`📡 ${url} (parsed from Response):`, data);
      return data;
    }
    console.log(`📡 ${url} (already parsed):`, response);
    return response;
  };

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const currentLimit = pagination.limit || 20;
      const query = new URLSearchParams({
        status: filters.status || '',
        priority: filters.priority || '',
        department: filters.department || '',
        search: filters.search || '',
        page: pagination.page || 1,
        limit: currentLimit,
      }).toString();
      
      const data = await safeFetch(`/api/tickets/admin/tickets?${query}`);
      
      // 🔍 Debug: see exact structure
      console.log('🎫 Tickets API response structure:', Object.keys(data));
      
      // Try multiple possible property names
      if (data && data.tickets) {
        setTickets(data.tickets);
        if (data.pagination) setPagination(data.pagination);
      } else if (data && data.data) {
        // Fallback if backend returns { data: [], pagination: {} }
        setTickets(data.data);
        if (data.pagination) setPagination(data.pagination);
      } else if (Array.isArray(data)) {
        // If backend returns array directly
        setTickets(data);
        setPagination(prev => ({ ...prev, total: data.length, pages: 1 }));
      } else {
        console.error('❌ Unknown tickets response structure:', data);
        setTickets([]);
      }
    } catch (err) {
      console.error('Tickets request failed:', err);
      setTickets([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await safeFetch('/api/tickets/admin/stats');
      console.log('📊 Stats response:', data);
      
      if (data && data.stats) {
        setStats(data);
      } else if (data && typeof data.total !== 'undefined') {
        // If stats are flat in response
        setStats({ stats: data });
      } else {
        console.error('❌ Unknown stats response structure:', data);
        setStats(null);
      }
    } catch (err) {
      console.error('Stats request failed:', err);
      setStats(null);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []); // Fetch stats once

  useEffect(() => {
    fetchTickets();
  }, [filters, pagination.page]); // Refetch when filters or page changes

  const deleteTicket = async (id, ticketId) => {
    if (confirm(`Delete ticket ${ticketId}? This action cannot be undone.`)) {
      try {
        await safeFetch(`/api/tickets/admin/tickets/${id}`, { method: 'DELETE' });
        fetchTickets();
        fetchStats();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const bulkUpdate = async () => {
    if (selectedTickets.length === 0) return;
    try {
      await safeFetch('/api/tickets/admin/tickets/bulk', {
        method: 'POST',
        body: JSON.stringify({
          ticketIds: selectedTickets,
          updates: { [bulkAction.type]: bulkAction.value },
        }),
      });
      setSelectedTickets([]);
      setShowBulkModal(false);
      fetchTickets();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleSelect = (id) => {
    if (selectedTickets.includes(id)) {
      setSelectedTickets(selectedTickets.filter(i => i !== id));
    } else {
      setSelectedTickets([...selectedTickets, id]);
    }
  };

  const selectAll = () => {
    if (selectedTickets.length === tickets.length) {
      setSelectedTickets([]);
    } else {
      setSelectedTickets(tickets.map(t => t.id));
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
    return <span className={`px-2 py-0.5 rounded-full text-xs ${styles[status] || styles.open}`}>{status?.replace('_', ' ')}</span>;
  };

  const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-xs">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value ?? 0}</p>
        </div>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon name={icon} size={20} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Ticket Management</h1>
          <p className="text-gray-500 text-sm mt-1">View, manage, and analyze all support tickets</p>
        </div>
      </div>

      {/* Stats Grid */}
      {stats && stats.stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <StatCard title="Total Tickets" value={stats.stats.total} icon="ticket" color="bg-blue-500/20 text-blue-400" />
          <StatCard title="Open" value={stats.stats.open} icon="alert-circle" color="bg-orange-500/20 text-orange-400" />
          <StatCard title="In Progress" value={stats.stats.inProgress} icon="loader" color="bg-purple-500/20 text-purple-400" />
          <StatCard title="Resolved" value={stats.stats.resolved} icon="check-circle" color="bg-green-500/20 text-green-400" />
          <StatCard title="Avg CSAT" value={stats.stats.avgCsat?.toFixed(1)} icon="star" color="bg-yellow-500/20 text-yellow-400" />
          <StatCard title="Closed" value={stats.stats.closed} icon="archive" color="bg-gray-500/20 text-gray-400" />
        </div>
      )}

      {/* Filters */}
      <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <input
            type="text"
            placeholder="Search by ID or subject..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value, page: 1 })}
            className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value, page: 1 })}
            className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm"
          >
            <option value="">All status</option>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
            <option value="pending_customer">Pending Customer</option>
          </select>
          <select
            value={filters.priority}
            onChange={(e) => setFilters({ ...filters, priority: e.target.value, page: 1 })}
            className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm"
          >
            <option value="">All priority</option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
          <select
            value={filters.department}
            onChange={(e) => setFilters({ ...filters, department: e.target.value, page: 1 })}
            className="bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm"
          >
            <option value="">All departments</option>
            <option value="technical">Technical</option>
            <option value="billing">Billing</option>
            <option value="sales">Sales</option>
            <option value="general">General</option>
          </select>
          <button
            onClick={() => setFilters({ status: '', priority: '', department: '', search: '' })}
            className="bg-[#1a1a1a] border border-[#262626] rounded-lg px-3 py-2 text-sm hover:bg-[#262626]"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedTickets.length > 0 && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex items-center justify-between">
          <span className="text-sm">{selectedTickets.length} ticket(s) selected</span>
          <div className="flex gap-2">
            <select
              onChange={(e) => {
                setBulkAction({ type: 'status', value: e.target.value });
                setShowBulkModal(true);
              }}
              className="bg-[#1a1a1a] border border-[#262626] rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="">Bulk Update Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            <button
              onClick={() => setSelectedTickets([])}
              className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-sm"
            >
              Clear Selection
            </button>
          </div>
        </div>
      )}

      {/* Tickets Table */}
      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => <div key={i} className="h-24 bg-[#111] rounded-xl animate-pulse" />)}
        </div>
      ) : tickets.length === 0 ? (
        <div className="text-center py-16 bg-[#111] border border-[#1e1e1e] rounded-xl">
          <Icon name="ticket" size={40} className="text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">No tickets found</p>
        </div>
      ) : (
        <div className="bg-[#111] border border-[#1e1e1e] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-[#1a1a1a] bg-[#0d0d0d]">
                <tr>
                  <th className="px-4 py-3 text-left w-8">
                    <input type="checkbox" checked={selectedTickets.length === tickets.length} onChange={selectAll} className="rounded" />
                  </th>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Subject</th>
                  <th className="px-4 py-3 text-left">User</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Priority</th>
                  <th className="px-4 py-3 text-left">Created</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-[#1a1a1a] transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" checked={selectedTickets.includes(ticket.id)} onChange={() => toggleSelect(ticket.id)} className="rounded" />
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-400">{ticket.ticketId}</td>
                    <td className="px-4 py-3 max-w-xs truncate">{ticket.subject}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 truncate max-w-[150px]">{ticket.email}</td>
                    <td className="px-4 py-3">{getStatusBadge(ticket.status)}</td>
                    <td className="px-4 py-3 capitalize">{ticket.priority}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{new Date(ticket.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/dashboard/ticket/${ticket.id}`)}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold text-xs"
                        >
                          VIEW
                        </button>
                        <button
                          onClick={() => deleteTicket(ticket.id, ticket.ticketId)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white font-bold text-xs"
                        >
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
            disabled={pagination.page === 1}
            className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-1 text-gray-400">Page {pagination.page} of {pagination.pages}</span>
          <button
            onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
            disabled={pagination.page === pagination.pages}
            className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Bulk Update Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowBulkModal(false)} />
          <div className="relative bg-[#141414] border border-[#262626] rounded-2xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-4">Bulk Update Tickets</h3>
            <p className="text-sm text-gray-400 mb-4">Update {selectedTickets.length} tickets with new {bulkAction.type}: <strong>{bulkAction.value}</strong></p>
            <div className="flex gap-3">
              <button onClick={bulkUpdate} className="flex-1 px-4 py-2 bg-blue-600 rounded-lg">Confirm</button>
              <button onClick={() => setShowBulkModal(false)} className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}