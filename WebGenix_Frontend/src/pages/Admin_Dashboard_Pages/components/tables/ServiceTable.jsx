export default function ServiceTable({ services, onToggleStatus, onDelete }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
      <table className="w-full text-sm">

        <thead>
          <tr className="border-b border-[#1a1a1a] text-[#525252]">
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {services.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-[#525252]">
                No services yet
              </td>
            </tr>
          ) : (
            services.map((s) => (
              <tr key={s.id} className="border-b border-[#1a1a1a]">

                <td className="px-4 py-3 text-white">{s.name}</td>

                <td className="px-4 py-3 text-[#a1a1a1]">
                  {s.category}
                </td>

                <td className="px-4 py-3 text-[#a1a1a1]">
                  ${s.price}
                </td>

                <td className={`px-4 py-3 ${
                  s.status === "active"
                    ? "text-green-400"
                    : "text-red-400"
                }`}>
                  {s.status}
                </td>

                <td className="px-4 py-3">
                  <div className="flex gap-3">

                    {/* Toggle */}
                    <button
                      onClick={() => onToggleStatus(s.id)}
                      className="text-xs text-blue-400 hover:underline"
                    >
                      {s.status === "active" ? "Disable" : "Enable"}
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => onDelete(s.id)}
                      className="text-xs text-red-400 hover:underline"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}
