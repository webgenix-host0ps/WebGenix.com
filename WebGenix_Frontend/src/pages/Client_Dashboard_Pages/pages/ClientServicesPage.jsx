/**
 * ClientServicesPage.jsx
 * Path: src/pages/Client_Dashboard_Pages/ClientServicesPage.jsx
 *
 * A full-featured services marketplace inside the client dashboard.
 * Clients can browse every service, see pricing plans, and initiate purchase
 * via a detailed checkout modal.
 *
 * Keycloak is NOT touched here — no auth logic. Order submission is a
 * placeholder fetch() call — swap in your real backend endpoint.
 *
 * Uses only: React state, Icon (../../components/ui/Icon), and Tailwind.
 */

import { useState } from 'react';
import Icon from '../../../components/ui/Icon';
import keycloak from "../../../auth/keycloak";


// ─── Services catalogue ───────────────────────────────────────────────────────
// Single source of truth for the client-facing marketplace.
// Mirrors the image: Email, Security, Infrastructure categories.

const SERVICE_CATALOGUE = [
  // ── EMAIL ─────────────────────────────────────────────────────────────────
  {
    id: 'business-email',
    name: 'Business Email',
    category: 'Email',
    icon: 'mail',
    description: 'Professional email hosting with your own domain. Includes webmail, IMAP/SMTP, spam filtering, and 25 GB mailbox per user.',
    badge: null,
    available: true,
    features: ['Custom domain email', '25 GB mailbox', 'Spam & virus protection', 'Webmail access', 'IMAP / SMTP / POP3', '99.9% uptime SLA'],
    plans: [
      { id: 'email-starter', name: 'Starter',      price: 299,  period: 'month', users: '1 user',    storage: '25 GB'  },
      { id: 'email-team',    name: 'Team',          price: 799,  period: 'month', users: '5 users',   storage: '125 GB' },
      { id: 'email-pro',     name: 'Pro',           price: 1499, period: 'month', users: '10 users',  storage: '250 GB' },
    ],
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    category: 'Email',
    icon: 'send',
    description: 'Reach your customers with beautiful campaigns. Drag-and-drop builder, automation workflows, and advanced analytics.',
    badge: 'comingSoon',
    available: false,
    features: ['Drag & drop builder', 'Automation workflows', 'A/B testing', 'Analytics & reports', 'List management', 'API access'],
    plans: [],
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    category: 'Email',
    icon: 'briefcase',
    description: 'Gmail, Drive, Docs, Meet and more for your entire team — managed, secured, and billed through Webgenix.',
    badge: 'comingSoon',
    available: false,
    features: ['Gmail for business', 'Google Drive 30 GB+', 'Google Meet', 'Docs, Sheets, Slides', 'Admin console', 'Google Workspace support'],
    plans: [],
  },

  // ── SECURITY ──────────────────────────────────────────────────────────────
  {
    id: 'ssl-standard',
    name: 'SSL Certificate',
    category: 'Security',
    icon: 'lock',
    description: 'Secure your site with HTTPS encryption. Domain-validated certificate issued in minutes, trusted by all major browsers.',
    badge: 'popular',
    available: true,
    features: ['Domain validation (DV)', '256-bit encryption', 'Browser padlock', 'Auto-renewal reminder', '99.9% browser trust', 'Wildcard add-on available'],
    plans: [
      { id: 'ssl-1y', name: '1 Year',  price: 799,  period: 'year', domains: '1 domain'  },
      { id: 'ssl-2y', name: '2 Years', price: 1299, period: '2 years', domains: '1 domain' },
    ],
  },
  {
    id: 'wildcard-ssl',
    name: 'Wildcard SSL',
    category: 'Security',
    icon: 'shield',
    description: 'One certificate protects your main domain and all its subdomains — ideal for SaaS products and multi-subdomain setups.',
    badge: null,
    available: true,
    features: ['Unlimited subdomains', 'Domain + sub-domains', '256-bit encryption', 'Auto-renewal reminder', 'Green padlock', '2048-bit RSA key'],
    plans: [
      { id: 'wssl-1y', name: '1 Year',  price: 2499, period: 'year'    },
      { id: 'wssl-2y', name: '2 Years', price: 3999, period: '2 years' },
    ],
  },
  {
    id: 'rapidssl',
    name: 'RapidSSL',
    category: 'Security',
    icon: 'zap',
    description: 'Get validated and live in under 5 minutes. The fastest domain-validated SSL for developers and small projects.',
    badge: null,
    available: true,
    features: ['Issued in < 5 minutes', 'Domain validation', '128/256-bit encryption', 'Browser trusted', 'Mobile compatible', 'Reissue anytime'],
    plans: [
      { id: 'rssl-1y', name: '1 Year',  price: 499, period: 'year'    },
      { id: 'rssl-2y', name: '2 Years', price: 799, period: '2 years' },
    ],
  },

  // ── INFRASTRUCTURE ────────────────────────────────────────────────────────
  {
    id: 'vps',
    name: 'VPS Servers',
    category: 'Infrastructure',
    icon: 'cpu',
    description: 'Scalable virtual private servers with full root access, SSD storage, and dedicated resources. Deploy any stack you need.',
    badge: null,
    available: true,
    features: ['Full root access', 'SSD NVMe storage', 'Dedicated vCPUs', '1 Gbps network', 'Free DDoS protection', 'Instant provisioning'],
    plans: [
      { id: 'vps-1',  name: 'VPS-1',  price: 799,  period: 'month', spec: '1 vCPU / 1 GB / 25 GB SSD'  },
      { id: 'vps-2',  name: 'VPS-2',  price: 1499, period: 'month', spec: '2 vCPU / 2 GB / 50 GB SSD'  },
      { id: 'vps-4',  name: 'VPS-4',  price: 2999, period: 'month', spec: '4 vCPU / 4 GB / 80 GB SSD'  },
      { id: 'vps-8',  name: 'VPS-8',  price: 5499, period: 'month', spec: '8 vCPU / 8 GB / 160 GB SSD' },
    ],
  },
  {
    id: 'shared-hosting',
    name: 'Shared Hosting',
    category: 'Infrastructure',
    icon: 'users',
    description: 'Cost-effective multi-domain hosting with cPanel, one-click WordPress, free SSL, and daily backups included.',
    badge: null,
    available: true,
    features: ['cPanel included', 'Unlimited bandwidth', 'Free SSL certificate', 'Daily backups', 'One-click WordPress', '24/7 support'],
    plans: [
      { id: 'sh-starter', name: 'Starter', price: 149,  period: 'month', spec: '1 domain / 10 GB SSD'   },
      { id: 'sh-plus',    name: 'Plus',    price: 299,  period: 'month', spec: '5 domains / 50 GB SSD'  },
      { id: 'sh-pro',     name: 'Pro',     price: 499,  period: 'month', spec: 'Unlimited / 100 GB SSD' },
    ],
  },
  {
    id: 'bare-metal',
    name: 'Bare Metal',
    category: 'Infrastructure',
    icon: 'hard-drive',
    description: 'Dedicated E3/E5 server power — no noisy neighbours, no virtualisation overhead. Built for high-performance workloads.',
    badge: null,
    available: true,
    features: ['Dedicated hardware', 'Intel E3 / E5 CPU', 'ECC RAM', 'RAID storage', '10 Gbps uplink', 'IPMI remote access'],
    plans: [
      { id: 'bm-e3', name: 'Intel E3', price: 8999,  period: 'month', spec: '4-core E3 / 32 GB / 2×1 TB HDD'  },
      { id: 'bm-e5', name: 'Intel E5', price: 14999, period: 'month', spec: '8-core E5 / 64 GB / 2×2 TB HDD'  },
    ],
  },
  {
    id: 'backup-server',
    name: 'Backup Solutions',
    category: 'Infrastructure',
    icon: 'database',
    description: 'Secure, automated off-site data protection with versioning, encryption, and one-click restore for any server or website.',
    badge: null,
    available: true,
    features: ['Automated daily backups', 'AES-256 encryption', '30-day retention', 'One-click restore', 'Multiple restore points', 'Off-site storage'],
    plans: [
      { id: 'bk-50',  name: '50 GB',   price: 199, period: 'month' },
      { id: 'bk-200', name: '200 GB',  price: 499, period: 'month' },
      { id: 'bk-500', name: '500 GB',  price: 999, period: 'month' },
    ],
  },
];

// Group by category in the order shown in the image
const CATEGORIES = ['Email', 'Security', 'Infrastructure'];

// ─── Shared atoms ─────────────────────────────────────────────────────────────

function Badge({ variant }) {
  const styles = {
    popular:    'bg-green-500/10 text-green-400 border border-green-500/20',
    comingSoon: 'bg-yellow-500/10 text-yellow-400/80 border border-yellow-500/20',
    new:        'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  };
  const labels = { popular: 'Popular', comingSoon: 'Coming Soon', new: 'New' };
  if (!variant) return null;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${styles[variant] ?? styles.popular}`}>
      {labels[variant] ?? variant}
    </span>
  );
}

function IconBox({ name, available }) {
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
      available ? 'bg-[#1a1a1a] border border-[#262626] group-hover:border-[#3b82f6]/40 group-hover:bg-[#3b82f6]/10' : 'bg-[#141414] border border-[#1a1a1a]'
    }`}>
      <Icon name={name} size={18} className={available ? 'text-[#525252] group-hover:text-[#3b82f6]' : 'text-[#333]'} />
    </div>
  );
}

// ─── Purchase Modal ────────────────────────────────────────────────────────────

function PurchaseModal({ service, onClose }) {
  const [selectedPlan, setSelectedPlan] = useState(service.plans[0] ?? null);
  const [step, setStep]                 = useState('select'); // 'select' | 'confirm' | 'success'
  const [loading, setLoading]           = useState(false);
  const [domain, setDomain]             = useState('');
  const [notes, setNotes]               = useState('');

  // Format price in INR
  const formatPrice = (paise) => `₹${(paise / 100).toFixed(0)}`;

  const handleOrder = async () => {
  try {
    setLoading(true);

    // 1. Create order from backend
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keycloak.token}`,
      },
      body: JSON.stringify({
        amount: selectedPlan.price, // IMPORTANT
        serviceId: service.id,
        planId: selectedPlan.id,
      }),
    });

    const order = await res.json();

    // 2. Razorpay options
    const options = { 
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,

      name: "Webgenix",
      description: `${service.name} - ${selectedPlan.name}`,

      handler: function (response) {
        console.log("Payment success:", response);
        setStep("success");
      },

      prefill: {
        name: keycloak.tokenParsed?.name,
        email: keycloak.tokenParsed?.email,
      },

      theme: {
        color: "#3b82f6",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    console.error("Payment error:", err);
  } finally {
    setLoading(false);
  }
};

  // Trap background scroll
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#141414] border border-[#262626] rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#262626] flex items-center justify-center">
              <Icon name={service.icon} size={16} className="text-[#3b82f6]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#fafafa]">{service.name}</p>
              <p className="text-xs text-[#525252]">{service.category}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-[#525252] hover:text-[#fafafa] hover:bg-[#1a1a1a] transition-colors">
            <Icon name="x" size={16} />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex-1 overflow-y-auto">

          {/* ── Step: Select plan ── */}
          {step === 'select' && (
            <div className="p-6 space-y-5">
              {/* Description */}
              <p className="text-sm text-[#a1a1a1] leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {service.features.map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <Icon name="check-circle" size={13} className="text-green-400 flex-shrink-0" />
                    <span className="text-xs text-[#a1a1a1]">{f}</span>
                  </div>
                ))}
              </div>

              {/* Plan selector */}
              <div>
                <p className="text-xs text-[#525252] font-medium uppercase tracking-wider mb-3">Choose a plan</p>
                <div className="space-y-2">
                  {service.plans.map(plan => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${
                        selectedPlan?.id === plan.id
                          ? 'border-[#3b82f6] bg-[#3b82f6]/5'
                          : 'border-[#262626] bg-[#0f0f0f] hover:border-[#3b3b3b]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedPlan?.id === plan.id ? 'border-[#3b82f6]' : 'border-[#525252]'
                        }`}>
                          {selectedPlan?.id === plan.id && (
                            <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#fafafa]">{plan.name}</p>
                          {plan.spec   && <p className="text-xs text-[#525252]">{plan.spec}</p>}
                          {plan.users  && <p className="text-xs text-[#525252]">{plan.users}</p>}
                          {plan.domains && <p className="text-xs text-[#525252]">{plan.domains}</p>}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-bold text-[#fafafa]">{formatPrice(plan.price)}</p>
                        <p className="text-xs text-[#525252]">/{plan.period}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Domain / notes field */}
              <div>
                <label className="block text-xs text-[#525252] font-medium mb-1.5">
                  Domain / website URL <span className="text-[#333]">(optional)</span>
                </label>
                <input
                  value={domain}
                  onChange={e => setDomain(e.target.value)}
                  placeholder="e.g. yourdomain.com"
                  className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] placeholder-[#333] focus:outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[#525252] font-medium mb-1.5">
                  Notes for our team <span className="text-[#333]">(optional)</span>
                </label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Any specific requirements…"
                  className="w-full bg-[#0f0f0f] border border-[#262626] rounded-lg px-3 py-2 text-sm text-[#fafafa] placeholder-[#333] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* ── Step: Confirm ── */}
          {step === 'confirm' && selectedPlan && (
            <div className="p-6 space-y-5">
              <p className="text-sm text-[#a1a1a1]">Please review your order before placing it.</p>

              <div className="bg-[#0f0f0f] border border-[#262626] rounded-xl p-4 space-y-3">
                {[
                  { label: 'Service',    value: service.name },
                  { label: 'Plan',       value: selectedPlan.name },
                  { label: 'Billing',    value: `Every ${selectedPlan.period}` },
                  { label: 'Domain',     value: domain || '—' },
                  { label: 'Notes',      value: notes  || '—' },
                ].map(row => (
                  <div key={row.label} className="flex items-start justify-between gap-4">
                    <span className="text-xs text-[#525252]">{row.label}</span>
                    <span className="text-xs text-[#a1a1a1] text-right max-w-[60%] break-words">{row.value}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#fafafa]">Total due today</span>
                  <span className="text-lg font-bold text-[#fafafa]">{formatPrice(selectedPlan.price)}</span>
                </div>
              </div>

              {/* Payment note */}
              <div className="flex items-start gap-2.5 px-3 py-2.5 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                <Icon name="zap" size={13} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-400/80 leading-relaxed">
                  Our team will contact you within 4 hours to complete payment and provisioning.
                  You will not be charged automatically.
                </p>
              </div>
            </div>
          )}

          {/* ── Step: Success ── */}
          {step === 'success' && (
            <div className="p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
                <Icon name="check-circle" size={26} className="text-green-400" />
              </div>
              <div>
                <p className="text-base font-semibold text-[#fafafa] mb-1">Order placed!</p>
                <p className="text-sm text-[#a1a1a1] leading-relaxed">
                  Your order for <strong className="text-[#fafafa]">{service.name} — {selectedPlan?.name}</strong> has been received.
                  Our team will reach out to you shortly to complete setup.
                </p>
              </div>
              <div className="bg-[#0f0f0f] border border-[#262626] rounded-xl p-4 text-left space-y-2">
                <p className="text-xs text-[#525252] font-medium">What happens next?</p>
                {[
                  'Our team reviews your order within 4 hours',
                  'We send you payment instructions by email',
                  'Service is provisioned immediately after payment',
                  'You receive access credentials in your dashboard',
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-xs text-[#3b82f6] font-mono mt-0.5 flex-shrink-0">{i + 1}.</span>
                    <span className="text-xs text-[#a1a1a1]">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Footer actions ── */}
        <div className="px-6 py-4 border-t border-[#1a1a1a] flex-shrink-0">
          {step === 'select' && (
            <div className="flex items-center gap-3">
              <button onClick={onClose} className="flex-1 py-2.5 border border-[#262626] text-[#a1a1a1] text-sm rounded-xl hover:bg-[#1a1a1a] transition-colors">
                Cancel
              </button>
              <button
                onClick={() => setStep('confirm')}
                disabled={!selectedPlan}
                className="flex-1 py-2.5 bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-40 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Continue →
              </button>
            </div>
          )}

          {step === 'confirm' && (
            <div className="flex items-center gap-3">
              <button onClick={() => setStep('select')} className="flex-1 py-2.5 border border-[#262626] text-[#a1a1a1] text-sm rounded-xl hover:bg-[#1a1a1a] transition-colors">
                ← Back
              </button>
              <button
                onClick={handleOrder}
                disabled={loading}
                className="flex-1 py-2.5 bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Placing order…
                  </>
                ) : (
                  'Place order'
                )}
              </button>
            </div>
          )}

          {step === 'success' && (
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#1a1a1a] border border-[#262626] text-[#fafafa] text-sm font-medium rounded-xl hover:bg-[#262626] transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ service, onSelect }) {
  return (
    <div
      className={`group relative bg-[#141414] border rounded-xl p-5 flex flex-col gap-4 transition-all duration-200 ${
        service.available
          ? 'border-[#262626] hover:border-[#3b82f6]/40 hover:bg-[#141414] cursor-pointer'
          : 'border-[#1a1a1a] opacity-60 cursor-default'
      }`}
      onClick={() => service.available && onSelect(service)}
    >
      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between gap-3">
        <IconBox name={service.icon} available={service.available} />
        {service.badge && <Badge variant={service.badge} />}
      </div>

      {/* Name + description */}
      <div className="flex-1">
        <p className={`text-sm font-semibold mb-1 ${service.available ? 'text-[#fafafa]' : 'text-[#525252]'}`}>
          {service.name}
        </p>
        <p className="text-xs text-[#525252] leading-relaxed line-clamp-2">
          {service.description}
        </p>
      </div>

      {/* Price or coming soon */}
      <div className="pt-3 border-t border-[#1a1a1a]">
        {service.available && service.plans.length > 0 ? (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#525252]">Starting from</p>
              <p className="text-base font-bold text-[#fafafa]">
                ₹{(Math.min(...service.plans.map(p => p.price)) / 100).toFixed(0)}
                <span className="text-xs font-normal text-[#525252] ml-1">
                  / {service.plans.sort((a, b) => a.price - b.price)[0]?.period}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-medium">View plans</span>
              <Icon name="arrow-right" size={13} />
            </div>
          </div>
        ) : (
          <p className="text-xs text-[#525252]">
            {service.available ? 'Contact for pricing' : 'Notify me when available'}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ClientServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch]                 = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const allCategories = ['All', ...CATEGORIES];

  const filtered = SERVICE_CATALOGUE.filter(svc => {
    const matchCat    = activeCategory === 'All' || svc.category === activeCategory;
    const matchSearch = svc.name.toLowerCase().includes(search.toLowerCase()) ||
                        svc.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Group filtered results by category for display
  const grouped = CATEGORIES.reduce((acc, cat) => {
    const items = filtered.filter(s => s.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <div className="space-y-8">

      {/* ── Page header ── */}
      <div>
        <h1 className="text-xl font-bold text-[#fafafa] mb-1">Our Services</h1>
        <p className="text-sm text-[#525252]">
          Everything you need to build, deploy, and scale your digital presence.
          Click any service to see plans and place an order.
        </p>
      </div>

      {/* ── Search + filter bar ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search services…"
            className="w-full bg-[#141414] border border-[#262626] rounded-lg pl-9 pr-4 py-2 text-sm text-[#fafafa] placeholder-[#525252] focus:outline-none focus:border-[#3b82f6] transition-colors"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-1 bg-[#141414] border border-[#262626] rounded-lg p-1 flex-wrap">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#3b82f6] text-white'
                  : 'text-[#a1a1a1] hover:text-[#fafafa]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {[
          { icon: 'shield',      text: '99.9% Uptime SLA' },
          { icon: 'headphones',  text: '24/7 Expert Support' },
          { icon: 'lock',        text: 'SSL Included Free' },
          { icon: 'refresh-cw',  text: 'Daily Backups' },
          { icon: 'zap',         text: 'Instant Provisioning' },
        ].map(f => (
          <div key={f.text} className="flex items-center gap-1.5">
            <Icon name={f.icon} size={13} className="text-[#3b82f6]" />
            <span className="text-xs text-[#525252]">{f.text}</span>
          </div>
        ))}
      </div>

      {/* ── Services grid by category ── */}
      {Object.keys(grouped).length === 0 ? (
        <div className="text-center py-20">
          <Icon name="search" size={32} className="text-[#262626] mx-auto mb-3" />
          <p className="text-sm text-[#525252]">No services match your search.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {Object.entries(grouped).map(([category, services]) => (
            <div key={category}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <p className="text-xs text-[#525252] font-medium uppercase tracking-widest">{category}</p>
                <div className="flex-1 h-px bg-[#1a1a1a]" />
                <span className="text-xs text-[#333]">{services.length} service{services.length > 1 ? 's' : ''}</span>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {services.map(svc => (
                  <ServiceCard key={svc.id} service={svc} onSelect={setSelectedService} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Bottom CTA ── */}
      <div className="pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="text-sm text-[#fafafa] font-medium">Can't find what you need?</p>
          <p className="text-xs text-[#525252]">Our team can build a custom hosting plan for your specific requirements.</p>
        </div>
        <a
          href="/contact"
          className="flex items-center gap-2 px-4 py-2 border border-[#262626] text-sm text-[#a1a1a1] rounded-xl hover:border-[#3b82f6]/40 hover:text-[#3b82f6] transition-colors whitespace-nowrap"
        >
          <Icon name="message-circle" size={14} />
          Talk to our team
        </a>
      </div>

      {/* ── Purchase Modal ── */}
      {selectedService && (
        <PurchaseModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
