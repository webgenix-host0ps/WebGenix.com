import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Icon from '../../../components/ui/Icon';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'layout' },
  { id: 'all-tickets', label: 'All Tickets', icon: 'ticket' },
  { id: 'my-tickets', label: 'My Tickets', icon: 'user-check' },
  { id: 'knowledge-base', label: 'Knowledge Base', icon: 'book-open' },
];

export default function SupportLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      {/* Sidebar */}
      <aside className={`bg-[#0f0f0f] border-r border-[#1a1a1a] transition-all ${collapsed ? 'w-16' : 'w-56'}`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-[#1a1a1a]">
          {!collapsed && <span className="text-white font-semibold">Support</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400">
            <Icon name={collapsed ? 'chevron-right' : 'x'} size={16} />
          </button>
        </div>
        <nav className="p-2 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname.includes(item.id);
            return (
              <Link
                key={item.id}
                to={`/support/dashboard/${item.id}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  isActive ? 'bg-blue-500/10 text-blue-400' : 'text-gray-400 hover:bg-[#1a1a1a]'
                }`}
              >
                <Icon name={item.icon} size={18} />
                {!collapsed && item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#1a1a1a] bg-[#0a0a0a]">
          <h2 className="text-white font-semibold">Support Dashboard</h2>
          <button
            onClick={() => window.keycloak?.logout({ redirectUri: window.location.origin })}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-2"
          >
            <Icon name="power" size={14} /> Logout
          </button>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}