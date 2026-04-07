// src/pages/Client_Dashboard_Pages/pages/Profile.jsx
import keycloak from '../../../auth/keycloak';

const fmtId = id => id ? `${id.slice(0, 8)}…${id.slice(-4)}` : '—';

function InfoRow({ label, value, mono }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-[#1a1a1a] last:border-0">
      <p className="text-xs text-[#444] flex-shrink-0 w-28">{label}</p>
      <p className={`text-sm text-[#e5e5e5] text-right break-all ${mono ? 'font-mono text-xs' : ''}`}>
        {value || '—'}
      </p>
    </div>
  );
}

export default function Profile() {
  const user = keycloak.tokenParsed;

  const initials = (user?.name || user?.preferred_username || 'U')
    .split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

  const roles = (user?.realm_access?.roles || []).filter(r =>
    !['offline_access', 'uma_authorization', 'default-roles-webgenix'].includes(r)
  );

  return (
    <div className="space-y-6 text-white max-w-2xl">
      <div>
        <h1 className="text-base font-semibold text-[#f0f0f0]">My Profile</h1>
        <p className="text-xs text-[#444] mt-0.5">Your account information</p>
      </div>

      {/* Avatar & Name */}
      <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-5 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold text-[#f0f0f0] truncate">
            {user?.name || user?.preferred_username}
          </p>
          <p className="text-xs text-[#444] truncate mt-0.5">{user?.email}</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden">
        <div className="px-5 py-3.5 border-b border-[#1a1a1a] bg-[#0d0d0d]">
          <p className="text-xs font-medium text-[#444] uppercase tracking-widest">Account Details</p>
        </div>
        <div className="px-5">
          <InfoRow label="Full name" value={user?.name} />
          <InfoRow label="Username" value={user?.preferred_username} />
          <InfoRow label="Email" value={user?.email} />
          <InfoRow label="User ID" value={fmtId(user?.sub)} mono />
        </div>
      </div>

      {/* Roles (if any) */}
      {roles.length > 0 && (
        <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden">
          <div className="px-5 py-3.5 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <p className="text-xs font-medium text-[#444] uppercase tracking-widest">Roles</p>
          </div>
          <div className="px-5 py-4 flex flex-wrap gap-2">
            {roles.map(role => (
              <span key={role} className="text-xs px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg font-medium">
                {role}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}