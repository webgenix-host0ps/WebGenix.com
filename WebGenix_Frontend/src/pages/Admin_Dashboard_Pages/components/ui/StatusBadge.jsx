export default function StatusBadge({ status }) {
  const styles = {
    active: "bg-green-500/10 text-green-400",
    suspended: "bg-red-500/10 text-red-400"
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${styles[status] || "bg-gray-500/10 text-gray-400"}`}>
      {status}
    </span>
  );
}
