// src/pages/Client_Dashboard_Pages/Services.jsx
import { useEffect, useState } from 'react';
import { authFetch } from '../../../utils/authFetch';

const STATUS = {
  active:    { dot: 'bg-emerald-400', cls: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  suspended: { dot: 'bg-red-400',     cls: 'text-red-400     bg-red-400/10     border-red-400/20'     },
  expired:   { dot: 'bg-amber-400',   cls: 'text-amber-400   bg-amber-400/10   border-amber-400/20'   },
};

const daysUntil = d => Math.ceil((new Date(d) - Date.now()) / 86400000);
const fmtDate   = d => new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
const fmtId     = id => String(id).slice(-8).toUpperCase();

function Badge({ status }) {
  const s = STATUS[status] ?? { dot: 'bg-zinc-500', cls: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20' };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${s.cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${status === 'active' ? 'animate-pulse' : ''}`} />
      {status}
    </span>
  );
}

function Card({ svc }) {
  const days   = daysUntil(svc.nextDueDate);
  const urgent = days >= 0 && days <= 7;

  return (
    <div className={`group bg-[#111] rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 overflow-hidden
      ${urgent ? 'border-amber-500/30 hover:border-amber-500/50' : 'border-[#222] hover:border-[#2e2e2e]'}`}>

      {urgent && <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#f0f0f0] truncate">{svc.serviceName}</p>
            <p className="text-xs text-[#555] mt-0.5 truncate">{svc.planName}</p>
          </div>
          <Badge status={svc.status} />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1e1e1e]">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#444] mb-1">Price</p>
            <p className="text-sm font-semibold text-[#e5e5e5]">{svc.price}</p>
            <p className="text-[11px] text-[#444]">per {svc.period || 'month'}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#444] mb-1">Next Due</p>
            <p className="text-sm font-semibold text-[#e5e5e5]">{fmtDate(svc.nextDueDate)}</p>
            {urgent      && <p className="text-[11px] text-amber-400 animate-pulse">Due in {days}d</p>}
            {!urgent && days <= 30 && <p className="text-[11px] text-amber-400/60">Due in {days}d</p>}
          </div>
        </div>
      </div>

      <div className={`px-5 py-2.5 border-t flex items-center justify-between
        ${urgent ? 'border-amber-500/10 bg-amber-500/3' : 'border-[#1a1a1a] bg-[#0d0d0d]'}`}>
        <p className="text-[11px] font-mono text-[#333]">{fmtId(svc.id)}</p>
        <button className="text-[11px] text-[#444] hover:text-blue-400 transition-colors flex items-center gap-1">
          Manage <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    let ok = true;
    authFetch('/api/client/services')
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(d => ok && setServices(Array.isArray(d?.services) ? d.services : Array.isArray(d) ? d : []))
      .catch(e => { console.error(e); ok && setServices([]); })
      .finally(() => ok && setLoading(false));
    return () => { ok = false; };
  }, []);

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-44 rounded-2xl bg-[#111] border border-[#1e1e1e] animate-pulse" />
      ))}
    </div>
  );

  if (!services.length) return (
    <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-[#333] text-xl">⬡</div>
      <p className="text-sm text-[#555] font-medium">No services yet</p>
      <p className="text-xs text-[#333]">Visit the Marketplace to get started.</p>
    </div>
  );

  const active   = services.filter(s => s.status === 'active').length;
  const expiring = services.filter(s => daysUntil(s.nextDueDate) <= 30 && s.status === 'active').length;
  const inactive = services.filter(s => s.status !== 'active').length;

  return (
    <div className="space-y-6 text-white">
      <div>
        <h1 className="text-base font-semibold text-[#f0f0f0]">My Services</h1>
        <p className="text-xs text-[#444] mt-0.5">{services.length} service{services.length !== 1 ? 's' : ''} on your account</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Active',        val: active,   cls: 'text-emerald-400 bg-emerald-400/5 border-emerald-400/10' },
          { label: 'Renewing Soon', val: expiring, cls: 'text-amber-400   bg-amber-400/5   border-amber-400/10'   },
          { label: 'Inactive',      val: inactive, cls: 'text-red-400     bg-red-400/5     border-red-400/10'     },
        ].map(s => (
          <div key={s.label} className={`rounded-xl border px-4 py-3 ${s.cls}`}>
            <p className="text-xl font-bold">{s.val}</p>
            <p className="text-[11px] text-[#444] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(svc => <Card key={svc.id} svc={svc} />)}
      </div>
    </div>
  );
}