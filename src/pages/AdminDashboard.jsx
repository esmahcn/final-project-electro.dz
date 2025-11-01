import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", price: "", category: "Lighting", image: "" });
  const [editing, setEditing] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://final-project-electrodz-backend.onrender.com/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editing ? `https://final-project-electrodz-backend.onrender.com/api/products/${editing._id}` : "https://final-project-electrodz-backend.onrender.com/api/products";
    const method = editing ? "PUT" : "POST";
    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ ...form, price: Number(form.price) }),
      });
      setForm({ name: "", price: "", category: "Lighting", image: "" });
      setEditing(null);
      fetchProducts();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete product?")) return;
    try {
      await fetch(`https://final-project-electrodz-backend.onrender.com/api/products/${id}`, {
        method: "DELETE",
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      });
      fetchProducts();
    } catch (err) { console.error(err); }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
        <input className="border p-2" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input className="border p-2" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
        <select className="border p-2" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
          <option>Lighting</option><option>Tools</option><option>Cables</option><option>Switches</option><option>Accessories</option>
        </select>
        <div className="flex gap-2">
          <input className="border p-2 flex-1" placeholder="Image URL" value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
          <button className="bg-orange-500 text-white px-4 rounded" type="submit">{editing ? "Update" : "Add"}</button>
        </div>
      </form>

      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map(p => (
            <div key={p._id} className="bg-white p-4 rounded shadow flex flex-col">
              <img src={p.image || "/images/default.png"} alt={p.name} className="h-36 w-full object-cover rounded mb-3"/>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-orange-600 font-bold">{p.price} DA</p>
              <div className="mt-auto flex gap-2 pt-3">
                <button onClick={() => { setEditing(p); setForm({ name: p.name, price: p.price, category: p.category, image: p.image }); }} className="px-2 py-1 bg-yellow-100 rounded"> <FaEdit /> </button>
                <button onClick={() => handleDelete(p._id)} className="px-2 py-1 bg-red-100 rounded"> <FaTrash /> </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
