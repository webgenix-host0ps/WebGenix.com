/**
 * AdminDashboard.jsx — Webgenix Admin Control Panel
 *
 * Path: src/pages/Admin_Dashboard_Pages/AdminDashboard.jsx
 *
 * Pages:
 *  overview    — platform KPIs, revenue chart, recent activity
 *  clients     — full client list, search, suspend/activate
 *  services    — manage all service catalogue entries
 *  orders      — all orders with status + provisioning control
 *  invoices    — billing overview, mark paid, refund
 *  tickets     — all support tickets, assign, close
 *  servers     — server health, CPU/RAM/disk widgets
 *  settings    — platform config, team members, roles
 *
 * Design: matches Webgenix dark design system exactly.
 * Uses only Icon from src/components/ui/Icon.jsx.
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/ui/Icon';
import logo from '../../assets/logo.png';
import keycloak from "../../auth/keycloak";

// ─── Mock data ────────────────────────────────────────────────────────────────

const ADMIN_USER = { name: 'Sarah Khan', email: 'sarah@webgenix.com', initials: 'SK', role: 'Super Admin' };

const MOCK_CLIENTS = [
  { id: 'CLI-001', name: 'Alex Johnson',   email: 'alex@example.com',    status: 'active',    services: 4, spend: '$1,240', joined: '2025-01-12', country: 'IN' },
  { id: 'CLI-002', name: 'Maria Garcia',   email: 'maria@startup.io',    status: 'active',    services: 2, spend: '$580',   joined: '2025-02-20', country: 'US' },
  { id: 'CLI-003', name: 'James Liu',      email: 'james@techco.com',    status: 'suspended', services: 1, spend: '$290',   joined: '2025-03-01', country: 'SG' },
  { id: 'CLI-004', name: 'Priya Patel',    email: 'priya@agency.in',     status: 'active',    services: 6, spend: '$3,100', joined: '2024-11-05', country: 'IN' },
  { id: 'CLI-005', name: 'Tom Adeyemi',    email: 'tom@ventures.ng',     status: 'active',    services: 3, spend: '$870',   joined: '2025-03-18', country: 'NG' },
  { id: 'CLI-006', name: 'Lena Müller',    email: 'lena@studio.de',      status: 'suspended', services: 0, spend: '$120',   joined: '2025-03-22', country: 'DE' },
];

const MOCK_ORDERS = [
  { id: 'ORD-9921', client: 'Alex Johnson',  service: 'VPS Pro — 4 vCPU',          plan: 'Monthly', amount: '$29.99', status: 'active',    provisioning: 'completed', date: '2026-03-20' },
  { id: 'ORD-9920', client: 'Priya Patel',   service: 'Bare Metal E5',              plan: 'Monthly', amount: '$149.00', status: 'active',   provisioning: 'completed', date: '2026-03-19' },
  { id: 'ORD-9919', client: 'Maria Garcia',  service: 'Business Email — 10 Users',  plan: 'Monthly', amount: '$9.99',  status: 'pending',   provisioning: 'in_progress', date: '2026-03-19' },
  { id: 'ORD-9918', client: 'James Liu',     service: 'SSL Wildcard',               plan: 'Yearly',  amount: '$49.99', status: 'suspended', provisioning: 'completed', date: '2026-03-10' },
  { id: 'ORD-9917', client: 'Tom Adeyemi',   service: 'Shared Hosting — Starter',   plan: 'Monthly', amount: '$4.99',  status: 'active',    provisioning: 'completed', date: '2026-03-18' },
];

const MOCK_INVOICES = [
  { id: 'INV-1042', client: 'Alex Johnson',  service: 'VPS Pro',          amount: '$29.99',  date: '2026-03-20', status: 'paid',    method: 'Stripe' },
  { id: 'INV-1041', client: 'Priya Patel',   service: 'Bare Metal E5',    amount: '$149.00', date: '2026-03-19', status: 'paid',    method: 'Stripe' },
  { id: 'INV-1040', client: 'Maria Garcia',  service: 'Business Email',   amount: '$9.99',   date: '2026-03-19', status: 'unpaid',  method: '—' },
  { id: 'INV-1039', client: 'James Liu',     service: 'SSL Wildcard',     amount: '$49.99',  date: '2026-03-10', status: 'overdue', method: '—' },
  { id: 'INV-1038', client: 'Tom Adeyemi',   service: 'Shared Hosting',   amount: '$4.99',   date: '2026-03-18', status: 'paid',    method: 'BTCPay' },
];

const MOCK_ALL_TICKETS = [
  { id: '#5541', client: 'Alex Johnson',  subject: 'Cannot access cPanel after migration',   dept: 'Technical', priority: 'high',   status: 'open',        agent: 'Ravi M.',   updated: '2h ago' },
  { id: '#5540', client: 'Priya Patel',   subject: 'Need additional IP allocation for VPS',  dept: 'Technical', priority: 'normal', status: 'in_progress', agent: 'Ravi M.',   updated: '5h ago' },
  { id: '#5539', client: 'Maria Garcia',  subject: 'Invoice payment link not working',       dept: 'Billing',   priority: 'normal', status: 'open',        agent: 'Unassigned',updated: '8h ago' },
  { id: '#5538', client: 'James Liu',     subject: 'Account reactivation request',           dept: 'Billing',   priority: 'urgent', status: 'open',        agent: 'Unassigned',updated: '1d ago' },
  { id: '#5537', client: 'Tom Adeyemi',   subject: 'How to point domain to VPS?',            dept: 'Technical', priority: 'low',    status: 'resolved',    agent: 'Asha K.',   updated: '2d ago' },
];

const MOCK_SERVERS = [
  { id: 'SRV-SG-01', name: 'SG-01 · Singapore', type: 'VPS Node',    status: 'online',  cpu: 68, ram: 74, disk: 45, clients: 12 },
  { id: 'SRV-MX-02', name: 'MX-02 · Mumbai',    type: 'Mail Server', status: 'online',  cpu: 22, ram: 38, disk: 61, clients: 8  },
  { id: 'SRV-SH-01', name: 'SH-01 · Singapore', type: 'Shared Node', status: 'online',  cpu: 81, ram: 88, disk: 72, clients: 34 },
  { id: 'SRV-BM-01', name: 'BM-01 · Mumbai',    type: 'Bare Metal',  status: 'warning', cpu: 94, ram: 91, disk: 55, clients: 3  },
];

const MOCK_TEAM = [
  { name: 'Sarah Khan',  email: 'sarah@webgenix.com',  role: 'admin',   status: 'active', joined: '2024-01-01' },
  { name: 'Ravi Mehta',  email: 'ravi@webgenix.com',   role: 'support', status: 'active', joined: '2024-06-15' },
  { name: 'Asha Kumar',  email: 'asha@webgenix.com',   role: 'support', status: 'active', joined: '2025-01-10' },
];

const REVENUE_BARS = [
  { month: 'Oct', value: 3800 }, { month: 'Nov', value: 4200 }, { month: 'Dec', value: 5100 },
  { month: 'Jan', value: 4600 }, { month: 'Feb', value: 5400 }, { month: 'Mar', value: 6180 },
];

// ─── Shared UI atoms ──────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const map = {
    active:       'bg-green-500/10 text-green-400 border-green-500/20',
    online:       'bg-green-500/10 text-green-400 border-green-500/20',
    paid:         'bg-green-500/10 text-green-400 border-green-500/20',
    resolved:     'bg-green-500/10 text-green-400 border-green-500/20',
    completed:    'bg-green-500/10 text-green-400 border-green-500/20',
    pending:      'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    unpaid:       'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    in_progress:  'bg-purple-500/10 text-purple-400 border-purple-500/20',
    open:         'bg-blue-500/10 text-blue-400 border-blue-500/20',
    suspended:    'bg-red-500/10 text-red-400 border-red-500/20',
    overdue:      'bg-red-500/10 text-red-400 border-red-500/20',
    warning:      'bg-orange-500/10 text-orange-400 border-orange-500/20',
    failed:       'bg-red-500/10 text-red-400 border-red-500/20',
  };
  const label = status.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${map[status] ?? 'bg-[#262626] text-[#a1a1a1] border-[#262626]'}`}>
      {label}
    </span>
  );
}

function StatCard({ icon, label, value, sub, accent, delta }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 flex items-start gap-4 hover:border-[#3b3b3b] transition-colors">
      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${accent ?? 'bg-[#1a1a1a]'}`}>
        <Icon name={icon} size={18} className="text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-[#525252] uppercase tracking-wider mb-1">{label}</p>
        <p className="text-2xl font-semibold text-[#fafafa] leading-none">{value}</p>
        {sub && <p className="text-xs text-[#525252] mt-1">{sub}</p>}
      </div>
      {delta && (
        <span className={`text-xs font-medium flex-shrink-0 ${delta > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {delta > 0 ? '↑' : '↓'} {Math.abs(delta)}%
        </span>
      )}
    </div>
  );
}

function PriorityDot({ priority }) {
  const c = { urgent: 'bg-red-600', high: 'bg-red-400', normal: 'bg-yellow-400', low: 'bg-[#525252]' };
  return <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${c[priority] ?? 'bg-[#525252]'}`} />;
}

function UsageBar({ value, warn = 80 }) {
  const color = value >= 90 ? 'bg-red-500' : value >= warn ? 'bg-orange-400' : 'bg-[#3b82f6]';
  return (
    <div className="flex items-center gap-2 min-w-0">
      <div className="flex-1 h-1.5 bg-[#262626] rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-[#a1a1a1] w-8 text-right flex-shrink-0">{value}%</span>
    </div>
  );
}

function SectionHeader({ title, sub, action }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="text-base font-semibold text-[#fafafa]">{title}</h1>
        {sub && <p className="text-sm text-[#525252] mt-0.5">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

function Table({ cols, rows, emptyMsg = 'No records found.' }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1a1a1a]">
              {cols.map(c => (
                <th key={c} className="text-left px-4 py-3 text-xs text-[#525252] font-medium uppercase tracking-wider whitespace-nowrap">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1a1a1a]">
            {rows.length === 0
              ? <tr><td colSpan={cols.length} className="text-center py-12 text-[#525252] text-sm">{emptyMsg}</td></tr>
              : rows
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Page: Overview ───────────────────────────────────────────────────────────

function OverviewPage() {
  const maxBar = Math.max(...REVENUE_BARS.map(b => b.value));
  return (
    <div className="space-y-6">
      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="users"       label="Total clients"   value="142"     sub="6 new this week"   accent="bg-[#3b82f6]"      delta={12} />
        <StatCard icon="server"      label="Active services" value="389"     sub="across all clients" accent="bg-[#22c55e]/70"   delta={5}  />
        <StatCard icon="dollar-sign" label="MRR"             value="$6,180"  sub="monthly recurring"  accent="bg-purple-500/70"  delta={14} />
        <StatCard icon="message-circle" label="Open tickets" value="8"       sub="3 urgent"           accent="bg-red-500/70"     delta={-2} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-[#141414] border border-[#262626] rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-sm font-semibold text-[#fafafa]">Revenue — last 6 months</p>
              <p className="text-xs text-[#525252]">Monthly recurring revenue in USD</p>
            </div>
            <span className="text-xs text-green-400 font-medium bg-green-500/10 border border-green-500/20 px-2 py-1 rounded">↑ 14% MoM</span>
          </div>
          <div className="flex items-end gap-3 h-32">
            {REVENUE_BARS.map(b => (
              <div key={b.month} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-xs text-[#525252]">${(b.value / 1000).toFixed(1)}k</span>
                <div
                  className="w-full rounded-t-md bg-[#3b82f6]/80 hover:bg-[#3b82f6] transition-colors"
                  style={{ height: `${(b.value / maxBar) * 100}%` }}
                />
                <span className="text-xs text-[#525252]">{b.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 space-y-4">
          <p className="text-sm font-semibold text-[#fafafa]">Platform health</p>
          {[
            { label: 'Avg server uptime', value: '99.91%', icon: 'activity',   good: true  },
            { label: 'Overdue invoices',  value: '3',      icon: 'file-text',  good: false },
            { label: 'SLA breaches',      value: '0',      icon: 'shield',     good: true  },
            { label: 'Suspended clients', value: '2',      icon: 'lock',       good: false },
            { label: 'Unassigned tickets',value: '2',      icon: 'message-circle', good: false },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#1a1a1a] last:border-0">
              <div className="flex items-center gap-2">
                <Icon name={item.icon} size={14} className="text-[#525252]" />
                <span className="text-xs text-[#a1a1a1]">{item.label}</span>
              </div>
              <span className={`text-xs font-semibold ${item.good ? 'text-green-400' : 'text-red-400'}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent orders + tickets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
            <p className="text-sm font-semibold text-[#fafafa]">Recent orders</p>
            <span className="text-xs text-[#3b82f6] cursor-pointer">View all</span>
          </div>
          {MOCK_ORDERS.slice(0, 4).map(o => (
            <div key={o.id} className="flex items-center gap-3 px-5 py-3 border-b border-[#1a1a1a] last:border-0 hover:bg-[#1a1a1a]/50">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#3b82f6] font-mono">{o.id}</p>
                <p className="text-sm text-[#fafafa] truncate">{o.client}</p>
                <p className="text-xs text-[#525252] truncate">{o.service}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-semibold text-[#fafafa]">{o.amount}</p>
                <StatusBadge status={o.status} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
            <p className="text-sm font-semibold text-[#fafafa]">Urgent tickets</p>
            <span className="text-xs text-[#3b82f6] cursor-pointer">View all</span>
          </div>
          {MOCK_ALL_TICKETS.filter(t => t.status !== 'resolved').slice(0, 4).map(t => (
            <div key={t.id} className="flex items-start gap-3 px-5 py-3 border-b border-[#1a1a1a] last:border-0 hover:bg-[#1a1a1a]/50">
              <PriorityDot priority={t.priority} className="mt-1.5" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#525252]">{t.id} · {t.client}</p>
                <p className="text-sm text-[#fafafa] truncate">{t.subject}</p>
                <p className="text-xs text-[#525252]">{t.dept} · {t.updated}</p>
              </div>
              <StatusBadge status={t.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page: Clients ────────────────────────────────────────────────────────────

function ClientsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const filtered = MOCK_CLIENTS.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || c.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-5">
      <SectionHeader title="Client management" sub={`${MOCK_CLIENTS.length} registered clients`} />
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or email…"
            className="w-full bg-[#141414] border border-[#262626] rounded-lg pl-9 pr-4 py-2 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none focus:border-[#3b82f6]" />
        </div>
        <div className="flex gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1">
          {['all', 'active', 'suspended'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === f ? 'bg-[#3b82f6] text-white' : 'text-[#a1a1a1] hover:text-[#fafafa]'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <Table
        cols={['Client', 'Email', 'Country', 'Services', 'Total spend', 'Joined', 'Status', 'Actions']}
        rows={filtered.map(c => (
          <tr key={c.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-xs text-[#3b82f6] font-semibold flex-shrink-0">
                  {c.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-[#fafafa] font-medium whitespace-nowrap">{c.name}</span>
              </div>
            </td>
            <td className="px-4 py-3 text-[#a1a1a1]">{c.email}</td>
            <td className="px-4 py-3 text-[#a1a1a1] text-center">{c.country}</td>
            <td className="px-4 py-3 text-[#fafafa] text-center">{c.services}</td>
            <td className="px-4 py-3 text-[#fafafa] font-medium">{c.spend}</td>
            <td className="px-4 py-3 text-[#525252]">{c.joined}</td>
            <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <button className="text-xs text-[#3b82f6] hover:underline">View</button>
                <button className={`text-xs ${c.status === 'active' ? 'text-red-400 hover:underline' : 'text-green-400 hover:underline'}`}>
                  {c.status === 'active' ? 'Suspend' : 'Activate'}
                </button>
              </div>
            </td>
          </tr>
        ))}
      />
    </div>
  );
}

// ─── Page: Orders ─────────────────────────────────────────────────────────────

function OrdersPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? MOCK_ORDERS : MOCK_ORDERS.filter(o => o.status === filter);
  return (
    <div className="space-y-5">
      <SectionHeader title="Orders" sub="All service purchase records" />
      <div className="flex gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1 w-fit">
        {['all', 'active', 'pending', 'suspended'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === f ? 'bg-[#3b82f6] text-white' : 'text-[#a1a1a1] hover:text-[#fafafa]'}`}>
            {f}
          </button>
        ))}
      </div>
      <Table
        cols={['Order ID', 'Client', 'Service', 'Plan', 'Amount', 'Provisioning', 'Status', 'Date', 'Actions']}
        rows={filtered.map(o => (
          <tr key={o.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
            <td className="px-4 py-3 text-[#3b82f6] font-mono font-medium">{o.id}</td>
            <td className="px-4 py-3 text-[#fafafa]">{o.client}</td>
            <td className="px-4 py-3 text-[#a1a1a1] max-w-[160px] truncate">{o.service}</td>
            <td className="px-4 py-3 text-[#525252]">{o.plan}</td>
            <td className="px-4 py-3 text-[#fafafa] font-semibold">{o.amount}</td>
            <td className="px-4 py-3"><StatusBadge status={o.provisioning} /></td>
            <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
            <td className="px-4 py-3 text-[#525252]">{o.date}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-2 whitespace-nowrap">
                {o.provisioning === 'in_progress' && <button className="text-xs text-purple-400 hover:underline">Provision</button>}
                {o.status === 'active' && <button className="text-xs text-red-400 hover:underline">Suspend</button>}
                {o.status === 'suspended' && <button className="text-xs text-green-400 hover:underline">Restore</button>}
              </div>
            </td>
          </tr>
        ))}
      />
    </div>
  );
}

// ─── Page: Invoices ───────────────────────────────────────────────────────────

function InvoicesPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? MOCK_INVOICES : MOCK_INVOICES.filter(i => i.status === filter);
  const totalRevenue = MOCK_INVOICES.filter(i => i.status === 'paid').reduce((s, i) => s + parseFloat(i.amount.replace('$', '')), 0);

  return (
    <div className="space-y-5">
      <SectionHeader title="Invoices & billing" sub="Platform-wide billing records" />
      <div className="grid grid-cols-3 gap-4">
        <StatCard icon="dollar-sign" label="Collected this month" value={`$${totalRevenue.toFixed(2)}`} accent="bg-[#22c55e]/70" />
        <StatCard icon="file-text"   label="Overdue"             value={MOCK_INVOICES.filter(i=>i.status==='overdue').length}  sub="need follow-up" accent="bg-red-500/70" />
        <StatCard icon="credit-card" label="Unpaid"              value={MOCK_INVOICES.filter(i=>i.status==='unpaid').length}   sub="awaiting payment" accent="bg-yellow-500/70" />
      </div>
      <div className="flex gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1 w-fit">
        {['all', 'paid', 'unpaid', 'overdue'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === f ? 'bg-[#3b82f6] text-white' : 'text-[#a1a1a1] hover:text-[#fafafa]'}`}>
            {f}
          </button>
        ))}
      </div>
      <Table
        cols={['Invoice', 'Client', 'Service', 'Amount', 'Method', 'Date', 'Status', 'Actions']}
        rows={filtered.map(inv => (
          <tr key={inv.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
            <td className="px-4 py-3 text-[#3b82f6] font-mono font-medium">{inv.id}</td>
            <td className="px-4 py-3 text-[#fafafa]">{inv.client}</td>
            <td className="px-4 py-3 text-[#a1a1a1]">{inv.service}</td>
            <td className="px-4 py-3 text-[#fafafa] font-semibold">{inv.amount}</td>
            <td className="px-4 py-3 text-[#525252]">{inv.method}</td>
            <td className="px-4 py-3 text-[#525252]">{inv.date}</td>
            <td className="px-4 py-3"><StatusBadge status={inv.status} /></td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-2 whitespace-nowrap">
                {inv.status === 'paid'    && <button className="flex items-center gap-1 text-xs text-[#525252] hover:text-[#a1a1a1]"><Icon name="download" size={12}/> PDF</button>}
                {inv.status !== 'paid'   && <button className="text-xs text-[#3b82f6] hover:underline">Mark paid</button>}
                {inv.status === 'paid'   && <button className="text-xs text-red-400 hover:underline">Refund</button>}
              </div>
            </td>
          </tr>
        ))}
      />
    </div>
  );
}

// ─── Page: Tickets (admin view — all tickets) ─────────────────────────────────

function TicketsPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? MOCK_ALL_TICKETS : MOCK_ALL_TICKETS.filter(t => t.status === filter);
  return (
    <div className="space-y-5">
      <SectionHeader title="All support tickets" sub="Cross-client ticket management" />
      <div className="flex gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1 w-fit">
        {['all', 'open', 'in_progress', 'resolved'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${filter === f ? 'bg-[#3b82f6] text-white' : 'text-[#a1a1a1] hover:text-[#fafafa]'}`}>
            {f.replace('_', ' ')}
          </button>
        ))}
      </div>
      <Table
        cols={['ID', 'Client', 'Subject', 'Dept', 'Priority', 'Agent', 'Status', 'Updated', 'Actions']}
        rows={filtered.map(t => (
          <tr key={t.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
            <td className="px-4 py-3 text-[#3b82f6] font-mono font-medium">{t.id}</td>
            <td className="px-4 py-3 text-[#fafafa] whitespace-nowrap">{t.client}</td>
            <td className="px-4 py-3 text-[#a1a1a1] max-w-[180px] truncate">{t.subject}</td>
            <td className="px-4 py-3 text-[#525252]">{t.dept}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-1.5"><PriorityDot priority={t.priority} /><span className="text-xs text-[#a1a1a1] capitalize">{t.priority}</span></div>
            </td>
            <td className="px-4 py-3 text-[#525252] whitespace-nowrap">{t.agent}</td>
            <td className="px-4 py-3"><StatusBadge status={t.status} /></td>
            <td className="px-4 py-3 text-[#525252]">{t.updated}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <button className="text-xs text-[#3b82f6] hover:underline">View</button>
                {t.status !== 'resolved' && <button className="text-xs text-green-400 hover:underline">Close</button>}
              </div>
            </td>
          </tr>
        ))}
      />
    </div>
  );
}

// ─── Page: Servers ────────────────────────────────────────────────────────────

function ServersPage() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Server infrastructure" sub="Live health across all nodes" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_SERVERS.map(srv => (
          <div key={srv.id} className="bg-[#141414] border border-[#262626] rounded-xl p-5 hover:border-[#3b3b3b] transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-[#fafafa]">{srv.name}</p>
                <p className="text-xs text-[#525252]">{srv.type} · {srv.clients} clients</p>
              </div>
              <StatusBadge status={srv.status} />
            </div>
            <div className="space-y-3">
              {[
                { label: 'CPU', value: srv.cpu },
                { label: 'RAM', value: srv.ram },
                { label: 'Disk', value: srv.disk },
              ].map(m => (
                <div key={m.label} className="flex items-center gap-3">
                  <span className="text-xs text-[#525252] w-8 flex-shrink-0">{m.label}</span>
                  <UsageBar value={m.value} />
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#1a1a1a] flex items-center gap-3">
              <button className="text-xs text-[#3b82f6] hover:underline">SSH</button>
              <button className="text-xs text-[#3b82f6] hover:underline">Reboot</button>
              {srv.status === 'warning' && <button className="text-xs text-orange-400 hover:underline">Investigate</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page: Settings ───────────────────────────────────────────────────────────

function SettingsPage() {
  const [inviteEmail, setInviteEmail] = useState('');
  return (
    <div className="space-y-6 max-w-3xl">
      <SectionHeader title="Platform settings" sub="Team, roles and global config" />

      {/* Team members */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
          <p className="text-sm font-semibold text-[#fafafa]">Team members</p>
        </div>
        <div className="divide-y divide-[#1a1a1a]">
          {MOCK_TEAM.map(m => (
            <div key={m.email} className="flex items-center gap-3 px-5 py-3.5">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-xs text-[#a1a1a1] font-semibold flex-shrink-0">
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#fafafa] font-medium">{m.name}</p>
                <p className="text-xs text-[#525252]">{m.email} · joined {m.joined}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded border font-medium ${m.role === 'admin' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                {m.role}
              </span>
              <button className="text-xs text-red-400 hover:underline ml-2">Remove</button>
            </div>
          ))}
        </div>

        {/* Invite */}
        <div className="px-5 py-4 border-t border-[#1a1a1a] bg-[#0f0f0f]">
          <p className="text-xs text-[#525252] mb-2 font-medium">Invite team member</p>
          <div className="flex gap-2">
            <input value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} placeholder="colleague@webgenix.com"
              className="flex-1 bg-[#141414] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none focus:border-[#3b82f6]" />
            <select className="bg-[#141414] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#a1a1a1] focus:outline-none focus:border-[#3b82f6]">
              <option value="support">Support</option>
              <option value="admin">Admin</option>
            </select>
            <button className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap">
              Send invite
            </button>
          </div>
        </div>
      </div>

      {/* Platform config */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 space-y-4">
        <p className="text-sm font-semibold text-[#fafafa] mb-2">Global configuration</p>
        {[
          { label: 'Platform name',      value: 'Webgenix', type: 'text' },
          { label: 'Support email',      value: 'support@webgenix.com', type: 'email' },
          { label: 'Default currency',   value: 'USD', type: 'text' },
          { label: 'Invoice prefix',     value: 'INV-', type: 'text' },
        ].map(f => (
          <div key={f.label}>
            <label className="block text-xs text-[#525252] mb-1.5 font-medium">{f.label}</label>
            <input type={f.type} defaultValue={f.value}
              className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] focus:outline-none focus:border-[#3b82f6] transition-colors" />
          </div>
        ))}
        <button className="mt-2 px-5 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors">
          Save configuration
        </button>
      </div>

      {/* Danger zone */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
        <p className="text-sm font-semibold text-red-400 mb-1">Danger zone</p>
        <p className="text-xs text-[#525252] mb-4">Destructive operations — proceed with extreme caution.</p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 border border-red-500/30 text-red-400 text-sm rounded-lg hover:bg-red-500/10 transition-colors">
            Purge audit logs
          </button>
          <button className="px-4 py-2 border border-red-500/30 text-red-400 text-sm rounded-lg hover:bg-red-500/10 transition-colors">
            Reset platform data
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const ADMIN_NAV = [
  { id: 'overview',  label: 'Overview',   icon: 'layout'         },
  { id: 'clients',   label: 'Clients',    icon: 'users'          },
  { id: 'orders',    label: 'Orders',     icon: 'shopping-bag'   },
  { id: 'invoices',  label: 'Invoices',   icon: 'file-text'      },
  { id: 'tickets',   label: 'Tickets',    icon: 'message-circle' },
  { id: 'servers',   label: 'Servers',    icon: 'server'         },
  { id: 'settings',  label: 'Settings',   icon: 'sliders'        },
];

function Sidebar({ active, onNav, collapsed, onToggle, user }) {
  return (
    <aside className={`flex flex-col bg-[#0f0f0f] border-r border-[#1a1a1a] transition-all duration-300 ${collapsed ? 'w-16' : 'w-56'} min-h-screen flex-shrink-0`}>
      <div className={`flex items-center h-16 px-4 border-b border-[#1a1a1a] ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && <Link to="/"><img src={logo} alt="Webgenix" className="h-7 w-auto" /></Link>}
        <button onClick={onToggle} className="p-1.5 rounded-md text-[#525252] hover:text-[#a1a1a1] hover:bg-[#1a1a1a] transition-colors">
          <Icon name={collapsed ? 'chevron-right' : 'x'} size={16} />
        </button>
      </div>

      {!collapsed && (
        <div className="mx-3 my-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <p className="text-xs text-purple-400 font-medium">Admin panel</p>
        </div>
      )}

      <nav className="flex-1 py-3 px-2 space-y-0.5">
        {ADMIN_NAV.map(item => (
          <button key={item.id} onClick={() => onNav(item.id)} title={collapsed ? item.label : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${active === item.id ? 'bg-[#3b82f6]/10 text-[#3b82f6]' : 'text-[#a1a1a1] hover:bg-[#1a1a1a] hover:text-[#fafafa]'}`}>
            <Icon name={item.icon} size={17} className="flex-shrink-0" />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className={`p-3 border-t border-[#1a1a1a] ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed
          ? <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-semibold">{user.initials}</div>
          : (
            <div className="flex items-center gap-3 px-1">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">{user.initials}</div>
              <div className="min-w-0">
                <p className="text-sm text-[#fafafa] truncate font-medium">{user.name}</p>
                <p className="text-xs text-purple-400 truncate">{user.role}</p>
              </div>
            </div>
          )
        }
      </div>
    </aside>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [page, setPage] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);

  const pageMap = {
    overview: <OverviewPage />,
    clients:  <ClientsPage />,
    orders:   <OrdersPage />,
    invoices: <InvoicesPage />,
    tickets:  <TicketsPage />,
    servers:  <ServersPage />,
    settings: <SettingsPage />,
  };

  const pageTitles = {
    overview: 'Admin overview', clients: 'Clients', orders: 'Orders',
    invoices: 'Invoices', tickets: 'Support tickets', servers: 'Servers', settings: 'Settings',
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('wg_session');
  //   navigate('/login');
  // };


const handleLogout = () => {
  keycloak.logout({
    redirectUri: window.location.origin
  });
};
  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <Sidebar active={page} onNav={setPage} collapsed={collapsed} onToggle={() => setCollapsed(v => !v)} user={ADMIN_USER} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#1a1a1a] bg-[#0a0a0a] flex-shrink-0">
          <p className="text-sm font-semibold text-[#fafafa]">{pageTitles[page]}</p>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs text-purple-400 font-medium">Admin</span>
            </div>
            <div className="w-px h-5 bg-[#262626]" />
            <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#525252] hover:text-[#fafafa] hover:bg-[#1a1a1a] rounded-lg transition-colors">
              <Icon name="power" size={14} />
              <span className="hidden sm:inline">Log out</span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">{pageMap[page]}</div>
        </main>
      </div>
    </div>
  );
}
