import { useAdmin } from "../hooks/AdminContext";

export default function Settings() {
  const { settings, setSettings } = useAdmin();

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">

      <h1 className="text-xl text-white font-semibold">
        Settings
      </h1>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-6">

        {/* App Name */}
        <div>
          <p className="text-xs text-[#525252] mb-1">App Name</p>
          <input
            value={settings.appName}
            onChange={e => handleChange("appName", e.target.value)}
            className="w-full bg-[#0f0f0f] border border-[#262626] rounded px-3 py-2 text-sm text-white"
          />
        </div>

        {/* Support Email */}
        <div>
          <p className="text-xs text-[#525252] mb-1">Support Email</p>
          <input
            value={settings.supportEmail}
            onChange={e => handleChange("supportEmail", e.target.value)}
            className="w-full bg-[#0f0f0f] border border-[#262626] rounded px-3 py-2 text-sm text-white"
          />
        </div>

        {/* Toggles */}
        <div className="space-y-4">

          <SettingToggle
            label="Dark Mode"
            value={settings.darkMode}
            onChange={() => handleToggle("darkMode")}
          />

          <SettingToggle
            label="Notifications"
            value={settings.notifications}
            onChange={() => handleToggle("notifications")}
          />

          <SettingToggle
            label="Auto Backup"
            value={settings.autoBackup}
            onChange={() => handleToggle("autoBackup")}
          />

        </div>

      </div>

    </div>
  );
}

/* 🔁 Toggle Component */
function SettingToggle({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-white">{label}</span>

      <button
        onClick={onChange}
        className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
          value ? "bg-blue-500" : "bg-[#262626]"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition ${
            value ? "translate-x-5" : ""
          }`}
        />
      </button>
    </div>
  );
}
