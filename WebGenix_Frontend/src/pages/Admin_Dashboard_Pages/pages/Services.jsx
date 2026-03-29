import { useState } from "react";
import { useAdmin } from "../hooks/AdminContext";
import ServiceTable from "../components/tables/ServiceTable";

export default function Services() {
  const { services, setServices } = useAdmin();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // ➕ Add Service
  const handleAddService = () => {
    if (!name || !price || !category) return;

    const newService = {
      id: Date.now().toString(),
      name,
      price,
      category,
      status: "active"
    };

    setServices(prev => [...prev, newService]);

    setName("");
    setPrice("");
    setCategory("");
  };

  // 🔁 Toggle Status
  const toggleStatus = (id) => {
    setServices(prev =>
      prev.map(s =>
        s.id === id
          ? { ...s, status: s.status === "active" ? "inactive" : "active" }
          : s
      )
    );
  };

  // ❌ Delete Service
  const deleteService = (id) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6">

      <h1 className="text-xl text-white font-semibold">
        Services
      </h1>

      {/* ➕ Add Service */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 space-y-3">
        <h2 className="text-sm text-white font-medium">
          Add New Service
        </h2>

        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Service Name"
          className="w-full bg-[#0f0f0f] border border-[#262626] rounded px-3 py-2 text-sm text-white"
        />

        <input
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Category (e.g. EMAIL, SECURITY)"
          className="w-full bg-[#0f0f0f] border border-[#262626] rounded px-3 py-2 text-sm text-white"
        />

        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full bg-[#0f0f0f] border border-[#262626] rounded px-3 py-2 text-sm text-white"
        />

        <button
          onClick={handleAddService}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded"
        >
          Add Service
        </button>
      </div>

      {/* 📊 Service Table (MODULAR) */}
      <ServiceTable
        services={services}
        onToggleStatus={toggleStatus}
        onDelete={deleteService}
      />

    </div>
  );
}