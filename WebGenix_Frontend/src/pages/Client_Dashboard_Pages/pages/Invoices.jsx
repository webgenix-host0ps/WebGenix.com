// src/pages/Client_Dashboard_Pages/Invoices.jsx
import { useEffect, useState, useCallback } from 'react';
import { authFetch } from '../../../utils/authFetch';

// ─── Constants ────────────────────────────────────────────────────────────────
const PAGE_SIZE = 10;

const METHOD_LABEL = {
  card:       'Card',
  upi:        'UPI',
  netbanking: 'Net Banking',
  wallet:     'Wallet',
  emi:        'EMI',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmtDate = d => new Date(d).toLocaleDateString('en-IN', {
  day: 'numeric', month: 'short', year: 'numeric',
});

const fmtTime = d => new Date(d).toLocaleTimeString('en-IN', {
  hour: '2-digit', minute: '2-digit',
});

const fmtId = id => String(id).slice(-10).toUpperCase();

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const map = {
    success: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    failed:  'text-red-400     bg-red-400/10     border-red-400/20',
    pending: 'text-amber-400   bg-amber-400/10   border-amber-400/20',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-xs font-medium ${map[status] ?? 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20'}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'success' ? 'bg-emerald-400' : status === 'failed' ? 'bg-red-400' : 'bg-amber-400'}`} />
      {status === 'success' ? 'Paid' : status === 'failed' ? 'Failed' : 'Pending'}
    </span>
  );
}

function MethodBadge({ method }) {
  return (
    <span className="text-xs text-[#555] bg-[#1a1a1a] border border-[#222] px-2 py-0.5 rounded-md font-mono">
      {METHOD_LABEL[method] ?? method ?? '—'}
    </span>
  );
}

function Skeleton() {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-14 rounded-xl bg-[#111] border border-[#1e1e1e] animate-pulse" style={{ opacity: 1 - i * 0.15 }} />
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
      <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center">
        <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
        </svg>
      </div>
      <p className="text-sm text-[#555] font-medium">No invoices yet</p>
      <p className="text-xs text-[#333]">Your billing history will appear here after your first purchase.</p>
    </div>
  );
}

function SummaryCards({ transactions }) {
  const total    = transactions.reduce((s, t) => s + parseFloat(t.amount.replace(/[^0-9.]/g, '')), 0);
  const paid     = transactions.filter(t => t.status === 'success').length;
  const latest   = transactions[0]?.date ? fmtDate(transactions[0].date) : '—';

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {[
        { label: 'Total spent',     value: `₹${total.toLocaleString('en-IN')}`, sub: 'all time' },
        { label: 'Paid invoices',   value: paid,    sub: `of ${transactions.length} total` },
        { label: 'Last payment',    value: latest,  sub: 'most recent' },
      ].map(s => (
        <div key={s.label} className="bg-[#111] border border-[#1e1e1e] rounded-xl px-4 py-3">
          <p className="text-[10px] uppercase tracking-widest text-[#444] mb-1">{s.label}</p>
          <p className="text-base font-semibold text-[#f0f0f0] leading-tight">{s.value}</p>
          <p className="text-[11px] text-[#444] mt-0.5">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

function InvoiceRow({ txn, index }) {
  return (
    <div
      className="grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 items-center
        px-4 py-3.5 bg-[#111] border border-[#1e1e1e] rounded-xl
        hover:bg-[#161616] hover:border-[#2a2a2a] transition-all duration-150 group"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Service + ID */}
      <div className="min-w-0">
        <p className="text-sm font-medium text-[#f0f0f0] truncate">{txn.serviceName}</p>
        <p className="text-[11px] text-[#444] font-mono mt-0.5">{fmtId(txn.id)}</p>
      </div>

      {/* Amount */}
      <div className="hidden md:block text-right">
        <p className="text-sm font-semibold text-[#e5e5e5]">{txn.amount}</p>
        <p className="text-[11px] text-[#444]">{txn.planName}</p>
      </div>

      {/* Date */}
      <div className="hidden md:block text-right">
        <p className="text-xs text-[#bbb]">{fmtDate(txn.date)}</p>
        <p className="text-[11px] text-[#444]">{fmtTime(txn.date)}</p>
      </div>

      {/* Method */}
      <div className="hidden md:flex justify-end">
        <MethodBadge method={txn.paymentMethod} />
      </div>

      {/* Status */}
      <div className="flex items-center gap-2">
        <StatusBadge status={txn.status} />
      </div>
    </div>
  );
}

function Pagination({ page, total, onPrev, onNext }) {
  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]">
      <p className="text-xs text-[#444]">
        Page {page} of {totalPages} · {total} invoices
      </p>
      <div className="flex gap-2">
        <button
          onClick={onPrev} disabled={page === 1}
          className="px-3 py-1.5 text-xs border border-[#222] rounded-lg text-[#555] hover:text-[#f0f0f0] hover:border-[#333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Prev
        </button>
        <button
          onClick={onNext} disabled={page === totalPages}
          className="px-3 py-1.5 text-xs border border-[#222] rounded-lg text-[#555] hover:text-[#f0f0f0] hover:border-[#333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Invoices() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal]               = useState(0);
  const [loading, setLoading]           = useState(true);
  const [page, setPage]                 = useState(1);
  const [filter, setFilter]             = useState('all'); // all | success | pending | failed

  const fetchData = useCallback(() => {
    setLoading(true);
    const offset = (page - 1) * PAGE_SIZE;
    authFetch(`/api/client/transactions?limit=${PAGE_SIZE}&offset=${offset}`)
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(d => {
        setTransactions(Array.isArray(d?.transactions) ? d.transactions : []);
        setTotal(d?.total ?? 0);
      })
      .catch(e => { console.error(e); setTransactions([]); })
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const filtered = filter === 'all'
    ? transactions
    : transactions.filter(t => t.status === filter);

  return (
    <div className="space-y-6 text-white">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-base font-semibold text-[#f0f0f0]">Invoices</h1>
          <p className="text-xs text-[#444] mt-0.5">Your complete billing history</p>
        </div>
      </div>

      {/* Summary cards — only when data exists */}
      {!loading && transactions.length > 0 && (
        <SummaryCards transactions={transactions} />
      )}

      {/* Filter tabs */}
      {!loading && transactions.length > 0 && (
        <div className="flex gap-1 bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg p-1 w-fit">
          {['all', 'success', 'pending', 'failed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors capitalize
                ${filter === f
                  ? 'bg-[#1e1e1e] text-[#f0f0f0] border border-[#2e2e2e]'
                  : 'text-[#555] hover:text-[#aaa]'
                }`}
            >
              {f === 'all' ? 'All' : f === 'success' ? 'Paid' : f === 'pending' ? 'Pending' : 'Failed'}
            </button>
          ))}
        </div>
      )}

      {/* Table header — desktop only */}
      {!loading && filtered.length > 0 && (
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 px-4 pb-1">
          {['Service', 'Amount', 'Date', 'Method', 'Status'].map(h => (
            <p key={h} className={`text-[10px] uppercase tracking-widest text-[#333] font-medium ${h !== 'Service' ? 'text-right' : ''}`}>
              {h}
            </p>
          ))}
        </div>
      )}

      {/* Content */}
      {loading ? (
        <Skeleton />
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-2">
          {filtered.map((txn, i) => (
            <InvoiceRow key={txn.id} txn={txn} index={i} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && (
        <Pagination
          page={page}
          total={total}
          onPrev={() => setPage(p => Math.max(1, p - 1))}
          onNext={() => setPage(p => p + 1)}
        />
      )}
    </div>
  );
}