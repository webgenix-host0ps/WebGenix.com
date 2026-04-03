import { useEffect, useState } from 'react';
import { authFetch } from '../../../utils/authFetch';

export default function Invoices() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await authFetch('/api/client/transactions');
      const data = await res.json();
      setTransactions(data.transactions);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="space-y-6 text-white">
      <h1 className="text-lg font-semibold">Transaction History</h1>
      <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-[#1a1a1a]">
            <tr>
              <th className="text-left px-5 py-3">Date</th>
              <th className="text-left px-5 py-3">Service</th>
              <th className="text-left px-5 py-3">Amount</th>
              <th className="text-left px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id} className="border-b border-[#1a1a1a]">
                <td className="px-5 py-3">{new Date(t.date).toLocaleDateString()}</td>
                <td className="px-5 py-3">{t.serviceName}</td>
                <td className="px-5 py-3">{t.amount}</td>
                <td className="px-5 py-3"><StatusBadge status={t.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}