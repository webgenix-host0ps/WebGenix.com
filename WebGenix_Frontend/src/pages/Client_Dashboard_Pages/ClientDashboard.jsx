/**
 * ClientDashboard.jsx — Webgenix Client Portal
 *
 * Matches the existing design system:
 *   dark-900 / dark-800 / dark-700 / dark-600 backgrounds
 *   text-primary (#fafafa) / text-secondary (#a1a1a1) / text-muted (#525252)
 *   accent (#3b82f6) / success (#22c55e) / warning (#f59e0b)
 *
 * Self-contained — uses only inline Tailwind classes + the
 * existing Icon component from src/components/ui/Icon.jsx.
 *
 * Drop into src/pages/ClientDashboard.jsx and add the route:
 *   <Route path="/dashboard" element={<ClientDashboard />} />
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/ui/Icon';
// import logo from '../assets/logo.png';

// ─── Mock data (replace with API calls) ──────────────────────────────────────

const MOCK_USER = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    initials: 'AJ',
    memberSince: 'Jan 2025',
};

const MOCK_SERVICES = [
    {
        id: 1,
        name: 'VPS Pro — 4 vCPU',
        category: 'Infrastructure',
        status: 'active',
        nextDue: '2026-04-20',
        price: '$29.99/mo',
        icon: 'cpu',
        uptime: '99.98%',
        server: 'SG-01',
    },
    {
        id: 2,
        name: 'Business Email — 10 Users',
        category: 'Email',
        status: 'active',
        nextDue: '2026-04-15',
        price: '$9.99/mo',
        icon: 'mail',
        uptime: '100%',
        server: 'MX-02',
    },
    {
        id: 3,
        name: 'SSL Certificate — Wildcard',
        category: 'Security',
        status: 'expiring',
        nextDue: '2026-04-03',
        price: '$49.99/yr',
        icon: 'shield',
        uptime: '—',
        server: '—',
    },
    {
        id: 4,
        name: 'Shared Hosting — Starter',
        category: 'Infrastructure',
        status: 'suspended',
        nextDue: '2026-03-10',
        price: '$4.99/mo',
        icon: 'users',
        uptime: '—',
        server: 'SH-01',
    },
];

const MOCK_INVOICES = [
    { id: 'INV-1042', service: 'VPS Pro — 4 vCPU', amount: '$29.99', date: '2026-03-20', status: 'paid' },
    { id: 'INV-1041', service: 'Business Email', amount: '$9.99', date: '2026-03-15', status: 'paid' },
    { id: 'INV-1040', service: 'SSL Wildcard', amount: '$49.99', date: '2026-03-01', status: 'unpaid' },
    { id: 'INV-1039', service: 'Shared Hosting', amount: '$4.99', date: '2026-02-10', status: 'overdue' },
];

const MOCK_TICKETS = [
    { id: '#5541', subject: 'Cannot access cPanel after migration', status: 'open', priority: 'high', updated: '2h ago' },
    { id: '#5538', subject: 'SSL renewal process — need help', status: 'in_progress', priority: 'normal', updated: '1d ago' },
    { id: '#5522', subject: 'Invoice #1039 payment failed', status: 'resolved', priority: 'normal', updated: '3d ago' },
];

const MOCK_ACTIVITY = [
    { icon: 'check-circle', text: 'VPS Pro renewed successfully', time: '2h ago', type: 'success' },
    { icon: 'mail', text: 'Invoice INV-1042 sent to alex@example.com', time: '2h ago', type: 'info' },
    { icon: 'shield', text: 'SSL certificate expiring in 10 days', time: '1d ago', type: 'warning' },
    { icon: 'message-circle', text: 'Support ticket #5541 opened', time: '2d ago', type: 'info' },
    { icon: 'lock', text: 'Password changed successfully', time: '5d ago', type: 'success' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }) {
    const map = {
        active:      { label: 'Active',      classes: 'bg-green-500/10 text-green-400  border-green-500/20' },
        expiring:    { label: 'Expiring',    classes: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
        suspended:   { label: 'Suspended',   classes: 'bg-red-500/10   text-red-400    border-red-500/20' },
        paid:        { label: 'Paid',        classes: 'bg-green-500/10 text-green-400  border-green-500/20' },
        unpaid:      { label: 'Unpaid',      classes: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
        overdue:     { label: 'Overdue',     classes: 'bg-red-500/10   text-red-400    border-red-500/20' },
        open:        { label: 'Open',        classes: 'bg-blue-500/10  text-blue-400   border-blue-500/20' },
        in_progress: { label: 'In Progress', classes: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
        resolved:    { label: 'Resolved',    classes: 'bg-green-500/10 text-green-400  border-green-500/20' },
    };
    const { label, classes } = map[status] ?? { label: status, classes: 'bg-[#262626] text-[#a1a1a1] border-[#262626]' };
    return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${classes}`}>
            {label}
        </span>
    );
}

function PriorityDot({ priority }) {
    const colors = { high: 'bg-red-400', normal: 'bg-yellow-400', low: 'bg-[#525252]', urgent: 'bg-red-600' };
    return <span className={`inline-block w-2 h-2 rounded-full ${colors[priority] ?? 'bg-[#525252]'}`} />;
}

function StatCard({ icon, label, value, sub, accent }) {
    return (
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 flex items-start gap-4 hover:border-[#3b3b3b] transition-colors">
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${accent ?? 'bg-[#1a1a1a]'}`}>
                <Icon name={icon} size={18} className={accent ? 'text-white' : 'text-[#a1a1a1]'} />
            </div>
            <div className="min-w-0">
                <p className="text-xs text-[#525252] uppercase tracking-wider mb-1">{label}</p>
                <p className="text-2xl font-semibold text-[#fafafa] leading-none">{value}</p>
                {sub && <p className="text-xs text-[#525252] mt-1">{sub}</p>}
            </div>
        </div>
    );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
    { id: 'overview',  label: 'Overview',  icon: 'layout' },
    { id: 'services',  label: 'My Services', icon: 'server' },
    { id: 'invoices',  label: 'Invoices',  icon: 'file-text' },
    { id: 'tickets',   label: 'Support',   icon: 'message-circle' },
    { id: 'profile',   label: 'Profile',   icon: 'users' },
];

function Sidebar({ active, onNav, collapsed, onToggle, user }) {
    return (
        <aside
            className={`
                flex flex-col bg-[#0f0f0f] border-r border-[#1a1a1a]
                transition-all duration-300 ease-in-out
                ${collapsed ? 'w-16' : 'w-56'}
                min-h-screen flex-shrink-0
            `}
        >
            {/* Logo row */}
            <div className={`flex items-center h-16 px-4 border-b border-[#1a1a1a] ${collapsed ? 'justify-center' : 'justify-between'}`}>
                {!collapsed && (
                    <Link to="/" className="flex items-center">
                        {/* <img src={logo} alt="Webgenix" className="h-7 w-auto" /> */}
                    </Link>
                )}
                <button
                    onClick={onToggle}
                    className="p-1.5 rounded-md text-[#525252] hover:text-[#a1a1a1] hover:bg-[#1a1a1a] transition-colors"
                    aria-label="Toggle sidebar"
                >
                    <Icon name={collapsed ? 'chevron-right' : 'x'} size={16} />
                </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 py-4 px-2 space-y-0.5">
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        onClick={() => onNav(item.id)}
                        className={`
                            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                            text-sm font-medium transition-colors text-left
                            ${active === item.id
                                ? 'bg-[#3b82f6]/10 text-[#3b82f6]'
                                : 'text-[#a1a1a1] hover:bg-[#1a1a1a] hover:text-[#fafafa]'
                            }
                        `}
                        title={collapsed ? item.label : undefined}
                    >
                        <Icon name={item.icon} size={18} className="flex-shrink-0" />
                        {!collapsed && <span className="truncate">{item.label}</span>}
                    </button>
                ))}
            </nav>

            {/* User footer */}
            <div className={`p-3 border-t border-[#1a1a1a] ${collapsed ? 'flex justify-center' : ''}`}>
                {collapsed ? (
                    <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center text-white text-xs font-semibold">
                        {user.initials}
                    </div>
                ) : (
                    <div className="flex items-center gap-3 px-1">
                        <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                            {user.initials}
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm text-[#fafafa] truncate font-medium">{user.name}</p>
                            <p className="text-xs text-[#525252] truncate">{user.email}</p>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}

// ─── Page views ───────────────────────────────────────────────────────────────

function OverviewPage({ user }) {
    const activeServices = MOCK_SERVICES.filter(s => s.status === 'active').length;
    const unpaidInvoices = MOCK_INVOICES.filter(i => i.status === 'unpaid' || i.status === 'overdue').length;
    const openTickets    = MOCK_TICKETS.filter(t => t.status === 'open' || t.status === 'in_progress').length;

    return (
        <div className="space-y-8">
            {/* Welcome banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#3b82f6]/10 to-[#1d4ed8]/5 border border-[#3b82f6]/20 rounded-xl p-6">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")` }}
                />
                <div className="relative">
                    <p className="text-xs text-[#3b82f6] uppercase tracking-wider font-medium mb-1">Welcome back</p>
                    <h1 className="text-xl font-semibold text-[#fafafa] mb-1">
                        Good to see you, {user.name.split(' ')[0]}.
                    </h1>
                    <p className="text-sm text-[#a1a1a1]">
                        Member since {user.memberSince} · Here's your account at a glance.
                    </p>
                </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="server"        label="Active services"   value={activeServices}    sub="of 4 total"        accent="bg-[#3b82f6]" />
                <StatCard icon="check-circle"  label="Avg uptime"        value="99.9%"             sub="last 30 days"      accent="bg-[#22c55e]/20" />
                <StatCard icon="file-text"     label="Unpaid invoices"   value={unpaidInvoices}    sub="action needed"     accent={unpaidInvoices > 0 ? 'bg-[#f59e0b]/20' : undefined} />
                <StatCard icon="message-circle" label="Open tickets"     value={openTickets}       sub="awaiting reply"    accent={openTickets > 0 ? 'bg-red-500/20' : undefined} />
            </div>

            {/* Bottom two-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Recent services */}
                <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
                        <h2 className="text-sm font-semibold text-[#fafafa]">My Services</h2>
                        <span className="text-xs text-[#3b82f6] cursor-pointer hover:underline">View all</span>
                    </div>
                    <div className="divide-y divide-[#1a1a1a]">
                        {MOCK_SERVICES.slice(0, 3).map(svc => (
                            <div key={svc.id} className="flex items-center gap-3 px-5 py-3.5 hover:bg-[#1a1a1a]/50 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                                    <Icon name={svc.icon} size={15} className="text-[#a1a1a1]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-[#fafafa] truncate font-medium">{svc.name}</p>
                                    <p className="text-xs text-[#525252]">Due {svc.nextDue} · {svc.price}</p>
                                </div>
                                <StatusBadge status={svc.status} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent activity */}
                <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
                        <h2 className="text-sm font-semibold text-[#fafafa]">Recent Activity</h2>
                    </div>
                    <div className="divide-y divide-[#1a1a1a]">
                        {MOCK_ACTIVITY.map((item, i) => {
                            const colorMap = {
                                success: 'text-green-400',
                                warning: 'text-yellow-400',
                                info:    'text-[#3b82f6]',
                            };
                            return (
                                <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                                    <Icon name={item.icon} size={15} className={`flex-shrink-0 mt-0.5 ${colorMap[item.type]}`} />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-[#a1a1a1] leading-snug">{item.text}</p>
                                    </div>
                                    <span className="text-xs text-[#525252] flex-shrink-0 mt-0.5">{item.time}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Recent invoices mini */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
                    <h2 className="text-sm font-semibold text-[#fafafa]">Recent Invoices</h2>
                    <span className="text-xs text-[#3b82f6] cursor-pointer hover:underline">View all</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-[#1a1a1a]">
                                {['Invoice', 'Service', 'Amount', 'Date', 'Status'].map(h => (
                                    <th key={h} className="text-left px-5 py-2.5 text-xs text-[#525252] font-medium uppercase tracking-wider">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1a1a1a]">
                            {MOCK_INVOICES.slice(0, 3).map(inv => (
                                <tr key={inv.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
                                    <td className="px-5 py-3 text-[#3b82f6] font-medium">{inv.id}</td>
                                    <td className="px-5 py-3 text-[#a1a1a1] truncate max-w-[160px]">{inv.service}</td>
                                    <td className="px-5 py-3 text-[#fafafa] font-medium">{inv.amount}</td>
                                    <td className="px-5 py-3 text-[#525252]">{inv.date}</td>
                                    <td className="px-5 py-3"><StatusBadge status={inv.status} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function ServicesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold text-[#fafafa]">My Services</h1>
                    <p className="text-sm text-[#525252] mt-0.5">{MOCK_SERVICES.length} services on your account</p>
                </div>
                <Link
                    to="/#services"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <Icon name="plus" size={15} />
                    Add service
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MOCK_SERVICES.map(svc => (
                    <div
                        key={svc.id}
                        className="bg-[#141414] border border-[#262626] hover:border-[#3b3b3b] rounded-xl p-5 transition-colors"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#262626] flex items-center justify-center">
                                    <Icon name={svc.icon} size={18} className="text-[#a1a1a1]" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#fafafa]">{svc.name}</p>
                                    <p className="text-xs text-[#525252]">{svc.category}</p>
                                </div>
                            </div>
                            <StatusBadge status={svc.status} />
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                            {[
                                { label: 'Price',   value: svc.price },
                                { label: 'Uptime',  value: svc.uptime },
                                { label: 'Server',  value: svc.server },
                            ].map(({ label, value }) => (
                                <div key={label} className="bg-[#0f0f0f] rounded-lg p-2.5 text-center">
                                    <p className="text-xs text-[#525252] mb-0.5">{label}</p>
                                    <p className="text-sm font-medium text-[#fafafa]">{value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-xs text-[#525252]">
                                {svc.status === 'suspended'
                                    ? <span className="text-red-400">Suspended — pay to restore</span>
                                    : <>Next due: <span className="text-[#a1a1a1]">{svc.nextDue}</span></>
                                }
                            </p>
                            <div className="flex items-center gap-2">
                                {svc.status === 'active' && (
                                    <button className="text-xs text-[#3b82f6] hover:underline">Manage</button>
                                )}
                                {svc.status === 'suspended' && (
                                    <button className="text-xs px-3 py-1 bg-[#3b82f6] text-white rounded-md hover:bg-[#2563eb] transition-colors">
                                        Reactivate
                                    </button>
                                )}
                                {svc.status === 'expiring' && (
                                    <button className="text-xs px-3 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-md hover:bg-yellow-500/20 transition-colors">
                                        Renew now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function InvoicesPage() {
    const [filter, setFilter] = useState('all');
    const filtered = filter === 'all' ? MOCK_INVOICES : MOCK_INVOICES.filter(i => i.status === filter);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-lg font-semibold text-[#fafafa]">Invoices</h1>
                <p className="text-sm text-[#525252] mt-0.5">Billing history and payment records</p>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1 w-fit">
                {['all', 'paid', 'unpaid', 'overdue'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${
                            filter === f
                                ? 'bg-[#3b82f6] text-white'
                                : 'text-[#a1a1a1] hover:text-[#fafafa]'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-[#1a1a1a]">
                                {['Invoice', 'Service', 'Amount', 'Date', 'Status', 'Action'].map(h => (
                                    <th key={h} className="text-left px-5 py-3 text-xs text-[#525252] font-medium uppercase tracking-wider">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1a1a1a]">
                            {filtered.map(inv => (
                                <tr key={inv.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
                                    <td className="px-5 py-4 text-[#3b82f6] font-medium">{inv.id}</td>
                                    <td className="px-5 py-4 text-[#a1a1a1]">{inv.service}</td>
                                    <td className="px-5 py-4 text-[#fafafa] font-semibold">{inv.amount}</td>
                                    <td className="px-5 py-4 text-[#525252]">{inv.date}</td>
                                    <td className="px-5 py-4"><StatusBadge status={inv.status} /></td>
                                    <td className="px-5 py-4">
                                        {inv.status === 'paid' ? (
                                            <button className="inline-flex items-center gap-1.5 text-xs text-[#525252] hover:text-[#a1a1a1] transition-colors">
                                                <Icon name="download" size={13} />
                                                PDF
                                            </button>
                                        ) : (
                                            <button className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-[#3b82f6] text-white rounded-md hover:bg-[#2563eb] transition-colors font-medium">
                                                <Icon name="credit-card" size={13} />
                                                Pay now
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filtered.length === 0 && (
                        <div className="text-center py-12 text-[#525252] text-sm">
                            No invoices found for this filter.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function TicketsPage() {
    const [showNew, setShowNew] = useState(false);
    const [form, setForm] = useState({ subject: '', dept: 'technical', priority: 'normal', message: '' });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold text-[#fafafa]">Support Tickets</h1>
                    <p className="text-sm text-[#525252] mt-0.5">Get help from our team 24/7</p>
                </div>
                <button
                    onClick={() => setShowNew(!showNew)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <Icon name="plus" size={15} />
                    New ticket
                </button>
            </div>

            {/* New ticket form */}
            {showNew && (
                <div className="bg-[#141414] border border-[#3b82f6]/30 rounded-xl p-5 space-y-4">
                    <h2 className="text-sm font-semibold text-[#fafafa]">Open a new ticket</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-3">
                            <label className="block text-xs text-[#525252] mb-1.5 font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="Brief description of your issue"
                                value={form.subject}
                                onChange={e => setForm({ ...form, subject: e.target.value })}
                                className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none focus:border-[#3b82f6] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-[#525252] mb-1.5 font-medium">Department</label>
                            <select
                                value={form.dept}
                                onChange={e => setForm({ ...form, dept: e.target.value })}
                                className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] focus:outline-none focus:border-[#3b82f6] transition-colors"
                            >
                                <option value="technical">Technical</option>
                                <option value="billing">Billing</option>
                                <option value="sales">Sales</option>
                                <option value="general">General</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs text-[#525252] mb-1.5 font-medium">Priority</label>
                            <select
                                value={form.priority}
                                onChange={e => setForm({ ...form, priority: e.target.value })}
                                className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] focus:outline-none focus:border-[#3b82f6] transition-colors"
                            >
                                <option value="low">Low</option>
                                <option value="normal">Normal</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
                            </select>
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-xs text-[#525252] mb-1.5 font-medium">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Describe your issue in detail..."
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                        <button className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors">
                            Submit ticket
                        </button>
                        <button onClick={() => setShowNew(false)} className="px-4 py-2 text-sm text-[#a1a1a1] hover:text-[#fafafa] transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Tickets list */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
                <div className="divide-y divide-[#1a1a1a]">
                    {MOCK_TICKETS.map(t => (
                        <div key={t.id} className="flex items-start gap-4 px-5 py-4 hover:bg-[#1a1a1a]/50 transition-colors cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon name="message-circle" size={14} className="text-[#525252]" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-[#525252] font-mono">{t.id}</span>
                                    <PriorityDot priority={t.priority} />
                                    <span className="text-xs text-[#525252] capitalize">{t.priority}</span>
                                </div>
                                <p className="text-sm text-[#fafafa] font-medium truncate">{t.subject}</p>
                                <p className="text-xs text-[#525252] mt-0.5">Updated {t.updated}</p>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-3">
                                <StatusBadge status={t.status} />
                                <Icon name="chevron-right" size={14} className="text-[#525252]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProfilePage({ user }) {
    const [form, setForm] = useState({
        firstName: 'Alex', lastName: 'Johnson',
        email: user.email, phone: '+91 98765 43210', company: 'Acme Corp',
    });

    return (
        <div className="space-y-6 max-w-2xl">
            <div>
                <h1 className="text-lg font-semibold text-[#fafafa]">Account Profile</h1>
                <p className="text-sm text-[#525252] mt-0.5">Manage your personal details and security</p>
            </div>

            {/* Avatar + basic info */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#3b82f6] flex items-center justify-center text-white text-xl font-semibold">
                        {user.initials}
                    </div>
                    <div>
                        <p className="text-base font-semibold text-[#fafafa]">{user.name}</p>
                        <p className="text-sm text-[#525252]">Member since {user.memberSince}</p>
                        <button className="text-xs text-[#3b82f6] hover:underline mt-1">Change avatar</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { label: 'First name',  key: 'firstName', type: 'text' },
                        { label: 'Last name',   key: 'lastName',  type: 'text' },
                        { label: 'Email',       key: 'email',     type: 'email' },
                        { label: 'Phone',       key: 'phone',     type: 'tel' },
                        { label: 'Company',     key: 'company',   type: 'text' },
                    ].map(({ label, key, type }) => (
                        <div key={key} className={key === 'company' ? 'sm:col-span-2' : ''}>
                            <label className="block text-xs text-[#525252] mb-1.5 font-medium">{label}</label>
                            <input
                                type={type}
                                value={form[key]}
                                onChange={e => setForm({ ...form, [key]: e.target.value })}
                                className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] focus:outline-none focus:border-[#3b82f6] transition-colors"
                            />
                        </div>
                    ))}
                </div>

                <button className="mt-5 px-5 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors">
                    Save changes
                </button>
            </div>

            {/* Security */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
                <h2 className="text-sm font-semibold text-[#fafafa] mb-4">Security</h2>
                <div className="space-y-3">
                    {[
                        { label: 'Change password',        icon: 'lock',     desc: 'Last changed 5 days ago' },
                        { label: 'Two-factor authentication', icon: 'shield', desc: 'Not enabled — we recommend enabling it' },
                        { label: 'Active sessions',        icon: 'activity', desc: '1 active session' },
                    ].map(item => (
                        <div key={item.label} className="flex items-center justify-between p-3 bg-[#0f0f0f] rounded-lg border border-[#1a1a1a] hover:border-[#262626] transition-colors">
                            <div className="flex items-center gap-3">
                                <Icon name={item.icon} size={15} className="text-[#525252]" />
                                <div>
                                    <p className="text-sm text-[#fafafa]">{item.label}</p>
                                    <p className="text-xs text-[#525252]">{item.desc}</p>
                                </div>
                            </div>
                            <button className="text-xs text-[#3b82f6] hover:underline flex-shrink-0">Manage</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Danger zone */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                <h2 className="text-sm font-semibold text-red-400 mb-1">Danger zone</h2>
                <p className="text-xs text-[#525252] mb-4">These actions are permanent and cannot be undone.</p>
                <button className="px-4 py-2 border border-red-500/30 text-red-400 text-sm rounded-lg hover:bg-red-500/10 transition-colors">
                    Delete account
                </button>
            </div>
        </div>
    );
}

// ─── Main dashboard ───────────────────────────────────────────────────────────

export default function ClientDashboard({ keycloak }) {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState('overview');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const handleLogout = () => {
        if (keycloak?.logout) {
            keycloak.logout({ redirectUri: window.location.origin });
        } else {
            navigate('/login');
        }
    };

    const pageMap = {
        overview: <OverviewPage user={MOCK_USER} />,
        services: <ServicesPage />,
        invoices: <InvoicesPage />,
        tickets:  <TicketsPage />,
        profile:  <ProfilePage user={MOCK_USER} />,
    };

    const pageTitles = {
        overview: 'Dashboard',
        services: 'My Services',
        invoices: 'Invoices',
        tickets:  'Support',
        profile:  'Profile',
    };

    return (
        <div className="flex min-h-screen bg-[#0a0a0a]">
            {/* Sidebar */}
            <Sidebar
                active={activePage}
                onNav={setActivePage}
                collapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(v => !v)}
                user={MOCK_USER}
            />

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top bar */}
                <header className="h-16 flex items-center justify-between px-6 border-b border-[#1a1a1a] bg-[#0a0a0a] flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm font-semibold text-[#fafafa]">{pageTitles[activePage]}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Notification bell */}
                        <button className="relative p-2 rounded-lg text-[#525252] hover:text-[#a1a1a1] hover:bg-[#1a1a1a] transition-colors">
                            <Icon name="activity" size={16} />
                            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                        </button>

                        {/* New service shortcut */}
                        <Link
                            to="/#services"
                            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-[#141414] border border-[#262626] hover:border-[#3b3b3b] text-[#a1a1a1] hover:text-[#fafafa] text-xs font-medium rounded-lg transition-colors"
                        >
                            <Icon name="plus-circle" size={14} />
                            New service
                        </Link>

                        {/* Divider */}
                        <div className="w-px h-5 bg-[#262626]" />

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#525252] hover:text-[#fafafa] hover:bg-[#1a1a1a] rounded-lg transition-colors"
                        >
                            <Icon name="power" size={14} />
                            <span className="hidden sm:inline">Log out</span>
                        </button>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-5xl mx-auto">
                        {pageMap[activePage]}
                    </div>
                </main>
            </div>
        </div>
    );
}