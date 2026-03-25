/**
 * SupportDashboard.jsx — Webgenix Support Agent Panel
 *
 * Path: src/pages/Support_Dashboard_Pages/SupportDashboard.jsx
 *
 * Pages:
 *  queue       — my assigned tickets, SLA timers, reply composer
 *  all         — all open/unassigned tickets across the platform
 *  clients     — read-only client lookup (name, services, status)
 *  kb          — knowledge base article search
 *  profile     — agent profile + availability toggle
 *
 * Design: same Webgenix dark system as client + admin dashboards.
 * Purple accent replaced by teal/green to distinguish the role visually.
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/ui/Icon';
import logo from '../../assets/logo.png';
import keycloak from "../../auth/keycloak";

// ─── Mock data ────────────────────────────────────────────────────────────────

const AGENT = { name: 'Ravi Mehta', email: 'ravi@webgenix.com', initials: 'RM', available: true };

const MY_TICKETS = [
  {
    id: '#5541', client: 'Alex Johnson',  clientEmail: 'alex@example.com',
    subject: 'Cannot access cPanel after migration',
    dept: 'Technical', priority: 'high',   status: 'open',
    slaHours: 8, slaRemaining: 2.4,
    messages: [
      { sender: 'Alex Johnson',  role: 'client',  body: 'I cannot login to my cPanel since this morning. I migrated last night and now it says "Invalid credentials". Please help ASAP.',          time: '10:00 AM' },
      { sender: 'Ravi Mehta',    role: 'agent',   body: 'Hi Alex, I can see your account was migrated to SG-01. Please try resetting your password using the link I am sending now.',             time: '10:45 AM' },
      { sender: 'Alex Johnson',  role: 'client',  body: 'I tried the reset link but the email did not arrive. Can you check if my email address is correct in the system?',                       time: '11:02 AM' },
    ],
  },
  {
    id: '#5540', client: 'Priya Patel',   clientEmail: 'priya@agency.in',
    subject: 'Need additional IP allocation for VPS',
    dept: 'Technical', priority: 'normal', status: 'in_progress',
    slaHours: 24, slaRemaining: 18.2,
    messages: [
      { sender: 'Priya Patel',   role: 'client',  body: 'We need 2 additional static IPs for our VPS BM-01. Can you allocate them and provide the config details?', time: '9:00 AM' },
    ],
  },
];

const ALL_OPEN_TICKETS = [
  { id: '#5541', client: 'Alex Johnson',  subject: 'Cannot access cPanel after migration',  dept: 'Technical', priority: 'high',   status: 'open',        agent: 'Ravi M.',   updated: '2h ago' },
  { id: '#5540', client: 'Priya Patel',   subject: 'Need additional IP allocation for VPS', dept: 'Technical', priority: 'normal', status: 'in_progress', agent: 'Ravi M.',   updated: '5h ago' },
  { id: '#5539', client: 'Maria Garcia',  subject: 'Invoice payment link not working',      dept: 'Billing',   priority: 'normal', status: 'open',        agent: 'Unassigned',updated: '8h ago' },
  { id: '#5538', client: 'James Liu',     subject: 'Account reactivation request',          dept: 'Billing',   priority: 'urgent', status: 'open',        agent: 'Unassigned',updated: '1d ago' },
  { id: '#5536', client: 'Tom Adeyemi',   subject: 'How to configure MX records?',          dept: 'Technical', priority: 'low',    status: 'open',        agent: 'Asha K.',   updated: '1d ago' },
];

const MOCK_CLIENTS_LOOKUP = [
  { id: 'CLI-001', name: 'Alex Johnson',  email: 'alex@example.com',  status: 'active',    services: ['VPS Pro', 'Business Email', 'SSL Wildcard'] },
  { id: 'CLI-002', name: 'Maria Garcia',  email: 'maria@startup.io',  status: 'active',    services: ['Business Email', 'Shared Hosting'] },
  { id: 'CLI-003', name: 'James Liu',     email: 'james@techco.com',  status: 'suspended', services: ['SSL Wildcard'] },
  { id: 'CLI-004', name: 'Priya Patel',   email: 'priya@agency.in',   status: 'active',    services: ['Bare Metal E5', 'Business Email', 'VPS Pro', 'SSL Standard', 'Backup', 'Shared'] },
];

const KB_ARTICLES = [
  { id: 1, title: 'How to reset cPanel password',              category: 'Technical', views: 342 },
  { id: 2, title: 'Pointing a domain to VPS — step by step',  category: 'Technical', views: 218 },
  { id: 3, title: 'SSL certificate installation guide',        category: 'Security',  views: 189 },
  { id: 4, title: 'MX record configuration for business email',category: 'Email',     views: 156 },
  { id: 5, title: 'How to request a refund',                   category: 'Billing',   views: 134 },
  { id: 6, title: 'Reactivating a suspended account',          category: 'Billing',   views: 112 },
];

// ─── Shared atoms ─────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const map = {
    active:       'bg-green-500/10 text-green-400 border-green-500/20',
    open:         'bg-blue-500/10 text-blue-400 border-blue-500/20',
    in_progress:  'bg-teal-500/10 text-teal-400 border-teal-500/20',
    resolved:     'bg-green-500/10 text-green-400 border-green-500/20',
    suspended:    'bg-red-500/10 text-red-400 border-red-500/20',
    pending:      'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  };
  const label = status.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${map[status] ?? 'bg-[#262626] text-[#a1a1a1] border-[#262626]'}`}>
      {label}
    </span>
  );
}

function PriorityDot({ priority }) {
  const c = { urgent: 'bg-red-600', high: 'bg-red-400', normal: 'bg-yellow-400', low: 'bg-[#525252]' };
  return <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${c[priority] ?? 'bg-[#525252]'}`} />;
}

function SlaTimer({ hoursRemaining, totalHours }) {
  const pct = Math.min(100, ((totalHours - hoursRemaining) / totalHours) * 100);
  const color = hoursRemaining < 2 ? 'bg-red-500' : hoursRemaining < 6 ? 'bg-orange-400' : 'bg-teal-500';
  const textColor = hoursRemaining < 2 ? 'text-red-400' : hoursRemaining < 6 ? 'text-orange-400' : 'text-teal-400';
  const h = Math.floor(hoursRemaining);
  const m = Math.round((hoursRemaining - h) * 60);
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#525252]">SLA</span>
        <span className={`text-xs font-medium ${textColor}`}>{h}h {m}m left</span>
      </div>
      <div className="h-1 bg-[#262626] rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ─── Page: My queue ───────────────────────────────────────────────────────────

function QueuePage() {
  const [activeTicket, setActiveTicket] = useState(MY_TICKETS[0]);
  const [reply, setReply] = useState('');
  const [isInternal, setIsInternal] = useState(false);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-base font-semibold text-[#fafafa]">My queue</h1>
        <p className="text-sm text-[#525252] mt-0.5">{MY_TICKETS.length} tickets assigned to you</p>
      </div>

      <div className="flex gap-4 h-[calc(100vh-200px)] min-h-[520px]">
        {/* Ticket list */}
        <div className="w-72 flex-shrink-0 bg-[#141414] border border-[#262626] rounded-xl overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-[#1a1a1a]">
            <p className="text-xs text-[#525252] uppercase tracking-wider font-medium">Assigned tickets</p>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-[#1a1a1a]">
            {MY_TICKETS.map(t => (
              <button key={t.id} onClick={() => setActiveTicket(t)}
                className={`w-full text-left px-4 py-3.5 hover:bg-[#1a1a1a]/50 transition-colors ${activeTicket?.id === t.id ? 'bg-teal-500/5 border-l-2 border-teal-500' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                  <PriorityDot priority={t.priority} />
                  <span className="text-xs text-[#525252] font-mono">{t.id}</span>
                  <StatusBadge status={t.status} />
                </div>
                <p className="text-sm text-[#fafafa] font-medium truncate mb-1">{t.subject}</p>
                <p className="text-xs text-[#525252]">{t.client}</p>
                <div className="mt-2">
                  <SlaTimer hoursRemaining={t.slaRemaining} totalHours={t.slaHours} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Ticket thread */}
        {activeTicket && (
          <div className="flex-1 bg-[#141414] border border-[#262626] rounded-xl flex flex-col overflow-hidden min-w-0">
            {/* Ticket header */}
            <div className="px-5 py-4 border-b border-[#1a1a1a] flex items-start justify-between gap-4 flex-shrink-0">
              <div className="min-w-0">
                <p className="text-xs text-[#525252] mb-1 font-mono">{activeTicket.id} · {activeTicket.dept} · <span className="capitalize">{activeTicket.priority}</span> priority</p>
                <p className="text-sm font-semibold text-[#fafafa] truncate">{activeTicket.subject}</p>
                <p className="text-xs text-[#525252] mt-0.5">{activeTicket.client} · {activeTicket.clientEmail}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <StatusBadge status={activeTicket.status} />
                <button className="text-xs px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors">
                  Mark resolved
                </button>
              </div>
            </div>

            {/* SLA bar */}
            <div className="px-5 py-2 border-b border-[#1a1a1a] flex-shrink-0">
              <SlaTimer hoursRemaining={activeTicket.slaRemaining} totalHours={activeTicket.slaHours} />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {activeTicket.messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'agent' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${msg.role === 'client' ? 'bg-[#3b82f6]/20 text-[#3b82f6]' : 'bg-teal-500/20 text-teal-400'}`}>
                    {msg.sender.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={`max-w-[75%] ${msg.role === 'agent' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#525252]">{msg.sender}</span>
                      <span className="text-xs text-[#525252]">{msg.time}</span>
                    </div>
                    <div className={`rounded-xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'client'
                        ? 'bg-[#1a1a1a] border border-[#262626] text-[#a1a1a1] rounded-tl-none'
                        : 'bg-teal-500/10 border border-teal-500/20 text-[#fafafa] rounded-tr-none'
                    }`}>
                      {msg.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply composer */}
            <div className="border-t border-[#1a1a1a] p-4 flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={() => setIsInternal(false)}
                  className={`text-xs px-3 py-1 rounded-md font-medium transition-colors ${!isInternal ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'text-[#525252] hover:text-[#a1a1a1]'}`}>
                  Reply to client
                </button>
                <button
                  onClick={() => setIsInternal(true)}
                  className={`text-xs px-3 py-1 rounded-md font-medium transition-colors ${isInternal ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'text-[#525252] hover:text-[#a1a1a1]'}`}>
                  Internal note
                </button>
              </div>
              <div className={`rounded-lg border overflow-hidden ${isInternal ? 'border-yellow-500/30' : 'border-[#262626]'}`}>
                <textarea
                  rows={3}
                  value={reply}
                  onChange={e => setReply(e.target.value)}
                  placeholder={isInternal ? 'Add an internal note (not visible to client)…' : 'Type your reply…'}
                  className={`w-full bg-[#0f0f0f] px-4 py-3 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none resize-none ${isInternal ? 'bg-yellow-500/5' : ''}`}
                />
                <div className={`flex items-center justify-between px-4 py-2 border-t ${isInternal ? 'border-yellow-500/20 bg-yellow-500/5' : 'border-[#1a1a1a] bg-[#0f0f0f]'}`}>
                  <span className="text-xs text-[#525252]">{isInternal ? 'Visible to team only' : 'Visible to client + team'}</span>
                  <button
                    disabled={!reply.trim()}
                    className="flex items-center gap-2 px-4 py-1.5 bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium rounded-lg transition-colors">
                    <Icon name="send" size={12} />
                    {isInternal ? 'Add note' : 'Send reply'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page: All tickets ────────────────────────────────────────────────────────

function AllTicketsPage() {
  const [dept, setDept] = useState('all');
  const filtered = dept === 'all' ? ALL_OPEN_TICKETS : ALL_OPEN_TICKETS.filter(t => t.dept.toLowerCase() === dept);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-base font-semibold text-[#fafafa]">All open tickets</h1>
        <p className="text-sm text-[#525252] mt-0.5">Platform-wide unresolved tickets</p>
      </div>

      <div className="flex gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1 w-fit">
        {['all', 'technical', 'billing', 'general'].map(f => (
          <button key={f} onClick={() => setDept(f)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${dept === f ? 'bg-teal-600 text-white' : 'text-[#a1a1a1] hover:text-[#fafafa]'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1a1a1a]">
                {['ID', 'Client', 'Subject', 'Dept', 'Priority', 'Agent', 'Status', 'Updated', 'Actions'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs text-[#525252] font-medium uppercase tracking-wider whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {filtered.map(t => (
                <tr key={t.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
                  <td className="px-4 py-3 text-teal-400 font-mono font-medium">{t.id}</td>
                  <td className="px-4 py-3 text-[#fafafa] whitespace-nowrap">{t.client}</td>
                  <td className="px-4 py-3 text-[#a1a1a1] max-w-[180px] truncate">{t.subject}</td>
                  <td className="px-4 py-3 text-[#525252]">{t.dept}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <PriorityDot priority={t.priority} />
                      <span className="text-xs text-[#a1a1a1] capitalize">{t.priority}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs ${t.agent === 'Unassigned' ? 'text-red-400' : 'text-[#525252]'}`}>{t.agent}</span>
                  </td>
                  <td className="px-4 py-3"><StatusBadge status={t.status} /></td>
                  <td className="px-4 py-3 text-[#525252]">{t.updated}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <button className="text-xs text-teal-400 hover:underline">Open</button>
                      {t.agent === 'Unassigned' && (
                        <button className="text-xs text-[#3b82f6] hover:underline">Assign to me</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Page: Client lookup ──────────────────────────────────────────────────────

function ClientLookupPage() {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);
  const filtered = MOCK_CLIENTS_LOOKUP.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-base font-semibold text-[#fafafa]">Client lookup</h1>
        <p className="text-sm text-[#525252] mt-0.5">Read-only client directory for support reference</p>
      </div>

      <div className="relative max-w-md">
        <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search clients…"
          className="w-full bg-[#141414] border border-[#262626] rounded-lg pl-9 pr-4 py-2 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none focus:border-teal-500" />
      </div>

      <div className="space-y-2">
        {filtered.map(c => (
          <div key={c.id} className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden hover:border-[#3b3b3b] transition-colors">
            <button className="w-full flex items-center gap-4 px-5 py-4 text-left" onClick={() => setExpanded(expanded === c.id ? null : c.id)}>
              <div className="w-9 h-9 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-sm text-[#3b82f6] font-semibold flex-shrink-0">
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#fafafa]">{c.name}</p>
                <p className="text-xs text-[#525252]">{c.email}</p>
              </div>
              <StatusBadge status={c.status} />
              <Icon name={expanded === c.id ? 'chevron-down' : 'chevron-right'} size={14} className="text-[#525252] flex-shrink-0" />
            </button>

            {expanded === c.id && (
              <div className="px-5 pb-4 border-t border-[#1a1a1a] pt-4 space-y-3">
                <p className="text-xs text-[#525252] font-medium uppercase tracking-wider">Active services</p>
                <div className="flex flex-wrap gap-2">
                  {c.services.map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 bg-[#1a1a1a] border border-[#262626] text-[#a1a1a1] rounded-lg">{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <button className="text-xs text-teal-400 hover:underline">View tickets</button>
                  <button className="text-xs text-[#3b82f6] hover:underline">Open new ticket</button>
                </div>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#525252] text-sm">No clients match your search.</div>
        )}
      </div>
    </div>
  );
}

// ─── Page: Knowledge base ─────────────────────────────────────────────────────

function KBPage() {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('all');
  const categories = ['all', ...new Set(KB_ARTICLES.map(a => a.category))];
  const filtered = KB_ARTICLES.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = cat === 'all' || a.category === cat;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-base font-semibold text-[#fafafa]">Knowledge base</h1>
        <p className="text-sm text-[#525252] mt-0.5">Search articles to help resolve tickets faster</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles…"
            className="w-full bg-[#141414] border border-[#262626] rounded-lg pl-9 pr-4 py-2 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none focus:border-teal-500" />
        </div>
        <div className="flex gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${cat === c ? 'bg-teal-600 text-white' : 'text-[#a1a1a1] hover:text-[#fafafa]'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map(a => (
          <div key={a.id} className="flex items-center gap-4 bg-[#141414] border border-[#262626] rounded-xl px-5 py-4 hover:border-[#3b3b3b] cursor-pointer transition-colors group">
            <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
              <Icon name="book" size={15} className="text-[#525252] group-hover:text-teal-400 transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#fafafa] font-medium group-hover:text-teal-400 transition-colors">{a.title}</p>
              <p className="text-xs text-[#525252] mt-0.5">{a.category} · {a.views} views</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="text-xs text-teal-400 hover:underline">Copy link</button>
              <Icon name="chevron-right" size={14} className="text-[#525252]" />
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#525252] text-sm">No articles found.</div>
        )}
      </div>
    </div>
  );
}

// ─── Page: Profile ────────────────────────────────────────────────────────────

function AgentProfilePage({ available, onToggleAvailable }) {
  return (
    <div className="space-y-5 max-w-xl">
      <div>
        <h1 className="text-base font-semibold text-[#fafafa]">Agent profile</h1>
        <p className="text-sm text-[#525252] mt-0.5">Your details and availability status</p>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 space-y-5">
        {/* Avatar + availability */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-white text-lg font-semibold">{AGENT.initials}</div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#fafafa]">{AGENT.name}</p>
            <p className="text-xs text-[#525252]">{AGENT.email}</p>
            <p className="text-xs text-teal-400 mt-0.5">Support Agent</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-xs text-[#525252]">Availability</p>
            <button
              onClick={onToggleAvailable}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                available
                  ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20'
                  : 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20'
              }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-green-400' : 'bg-red-400'}`} />
              {available ? 'Available' : 'Away'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Tickets resolved', value: '47' },
            { label: 'Avg response',     value: '38m' },
            { label: 'CSAT score',       value: '96%' },
          ].map(s => (
            <div key={s.label} className="bg-[#0f0f0f] rounded-lg p-3 text-center">
              <p className="text-lg font-semibold text-[#fafafa]">{s.value}</p>
              <p className="text-xs text-[#525252] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Edit fields */}
        <div className="space-y-3 pt-2 border-t border-[#1a1a1a]">
          {[
            { label: 'Full name',   value: AGENT.name,  type: 'text'  },
            { label: 'Email',       value: AGENT.email, type: 'email' },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-xs text-[#525252] mb-1.5 font-medium">{f.label}</label>
              <input type={f.type} defaultValue={f.value}
                className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] focus:outline-none focus:border-teal-500 transition-colors" />
            </div>
          ))}
          <button className="mt-1 px-5 py-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium rounded-lg transition-colors">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const SUPPORT_NAV = [
  { id: 'queue',    label: 'My queue',       icon: 'message-circle' },
  { id: 'all',      label: 'All tickets',    icon: 'layers'         },
  { id: 'clients',  label: 'Client lookup',  icon: 'users'          },
  { id: 'kb',       label: 'Knowledge base', icon: 'book'           },
  { id: 'profile',  label: 'My profile',     icon: 'activity'       },
];

function Sidebar({ active, onNav, collapsed, onToggle, available }) {
  return (
    <aside className={`flex flex-col bg-[#0f0f0f] border-r border-[#1a1a1a] transition-all duration-300 ${collapsed ? 'w-16' : 'w-56'} min-h-screen flex-shrink-0`}>
      <div className={`flex items-center h-16 px-4 border-b border-[#1a1a1a] ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && <Link to="/"><img src={logo} alt="Webgenix" className="h-7 w-auto" /></Link>}
        <button onClick={onToggle} className="p-1.5 rounded-md text-[#525252] hover:text-[#a1a1a1] hover:bg-[#1a1a1a] transition-colors">
          <Icon name={collapsed ? 'chevron-right' : 'x'} size={16} />
        </button>
      </div>

      {!collapsed && (
        <div className="mx-3 my-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-between">
          <p className="text-xs text-teal-400 font-medium">Support panel</p>
          <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-green-400' : 'bg-red-400'}`} />
        </div>
      )}

      <nav className="flex-1 py-3 px-2 space-y-0.5">
        {SUPPORT_NAV.map(item => (
          <button key={item.id} onClick={() => onNav(item.id)} title={collapsed ? item.label : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${active === item.id ? 'bg-teal-500/10 text-teal-400' : 'text-[#a1a1a1] hover:bg-[#1a1a1a] hover:text-[#fafafa]'}`}>
            <Icon name={item.icon} size={17} className="flex-shrink-0" />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className={`p-3 border-t border-[#1a1a1a] ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed
          ? <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-semibold">{AGENT.initials}</div>
          : (
            <div className="flex items-center gap-3 px-1">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">{AGENT.initials}</div>
              <div className="min-w-0">
                <p className="text-sm text-[#fafafa] truncate font-medium">{AGENT.name}</p>
                <p className="text-xs text-teal-400 truncate">Support agent</p>
              </div>
            </div>
          )
        }
      </div>
    </aside>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function SupportDashboard() {
  const navigate = useNavigate();
  const [page, setPage] = useState('queue');
  const [collapsed, setCollapsed] = useState(false);
  const [available, setAvailable] = useState(true);

  const pageTitles = {
    queue: 'My queue', all: 'All tickets', clients: 'Client lookup', kb: 'Knowledge base', profile: 'My profile',
  };

  const pageMap = {
    queue:   <QueuePage />,
    all:     <AllTicketsPage />,
    clients: <ClientLookupPage />,
    kb:      <KBPage />,
    profile: <AgentProfilePage available={available} onToggleAvailable={() => setAvailable(v => !v)} />,
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
      <Sidebar active={page} onNav={setPage} collapsed={collapsed} onToggle={() => setCollapsed(v => !v)} available={available} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#1a1a1a] bg-[#0a0a0a] flex-shrink-0">
          <p className="text-sm font-semibold text-[#fafafa]">{pageTitles[page]}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAvailable(v => !v)}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${available ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {available ? 'Available' : 'Away'}
            </button>
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
