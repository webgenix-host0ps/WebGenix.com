import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { AdminProvider } from "../hooks/AdminContext";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AdminProvider>
      <div className="flex min-h-screen bg-[#0a0a0a]">
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(prev => !prev)}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <Topbar />

          <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-6xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}