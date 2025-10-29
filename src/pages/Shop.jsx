import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaSearch,
  FaShoppingCart,
  FaEye,
  FaBars,
  FaTimes,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

function Shop() {
  const { addToCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ New states for backend
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", category: "Lighting", image: "" });

  const categories = ["All", "Lighting", "Tools", "Cables", "Switches", "Accessories"];

  // ✅ Fetch products from backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add or Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingProduct
      ? `http://localhost:5000/api/products/${editingProduct._id}`
      : "http://localhost:5000/api/products";
    const method = editingProduct ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      await fetchProducts();
      setForm({ name: "", price: "", category: "Lighting", image: "" });
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, { method: "DELETE" });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const handleEdit = (p) => {
    setEditingProduct(p);
    setForm({ name: p.name, price: p.price, category: p.category, image: p.image });
  };

  useEffect(() => {
    const categoryFromURL = queryParams.get("category");
    if (categoryFromURL) setSelectedCategory(categoryFromURL);
    else setSelectedCategory("All");
  }, [location.search]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = products
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .sort((a, b) =>
      sortOrder === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  const handleAddToCart = (product) => {
    addToCart(product);
    setClickedButton(product._id);
    setTimeout(() => setClickedButton(null), 300);
  };

  const handleViewProduct = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSidebarOpen(false);
    if (cat === "All") navigate("/shop");
    else navigate(`/shop?category=${encodeURIComponent(cat)}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <aside
        className={`bg-gray-200 border-r border-white fixed lg:static top-0 left-0 w-64 lg:w-1/4 xl:w-1/5 h-full transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 z-40 p-4 ${
          isSticky ? "lg:sticky lg:top-20" : ""
        }`}
      >
        <div className="flex justify-between items-center lg:hidden mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-600">
            <FaTimes size={20} />
          </button>
        </div>

        <h2 className="hidden lg:block text-lg font-semibold text-gray-700 mb-4">
          Categories
        </h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`cursor-pointer py-2 px-3 rounded-md text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-white border-l-4 border-orange-500 text-orange-600"
                  : "hover:bg-white hover:text-orange-500"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:w-3/4 xl:w-4/5 p-4 sm:p-6 lg:p-8">
        {/* ✅ Add Product Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6"
        >
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FaPlus /> {editingProduct ? "Edit Product" : "Add New Product"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 rounded-md text-sm"
              required
            />
            <input
              type="number"
              placeholder="Price (DA)"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="border p-2 rounded-md text-sm"
              required
            />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="border p-2 rounded-md text-sm"
            >
              {categories.slice(1).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="border p-2 rounded-md text-sm"
            />
          </div>
          <button
            type="submit"
            className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            {editingProduct ? "Update" : "Add"}
          </button>
          {editingProduct && (
            <button
              type="button"
              onClick={() => {
                setEditingProduct(null);
                setForm({ name: "", price: "", category: "Lighting", image: "" });
              }}
              className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
          )}
        </form>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            className="lg:hidden p-2 border border-gray-200 bg-white rounded flex items-center gap-2 text-gray-700 shadow-sm"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars /> Filters
          </button>

          <div className="flex items-center border border-gray-200 bg-white rounded-md px-3 py-2 w-full sm:w-72 shadow-sm">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search product..."
              className="w-full outline-none text-sm text-gray-700"
            />
          </div>

          <div className="flex items-center border border-gray-200 bg-white rounded-md px-3 py-2 shadow-sm">
            <FaChevronDown className="text-gray-400 mr-2" />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-700"
            >
              <option value="A-Z">Name: A-Z</option>
              <option value="Z-A">Name: Z-A</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((p) => (
              <div
                key={p._id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-3 flex flex-col"
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-36 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-sm mt-2 mb-1">
                  {p.name}
                </h3>
                <p className="text-orange-600 font-bold mb-3">{p.price} DA</p>
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => handleAddToCart(p)}
                    className={`flex-1 py-1.5 rounded-md text-sm flex items-center justify-center gap-2 text-white transition-all duration-200 ${
                      clickedButton === p._id
                        ? "bg-orange-600 scale-95 shadow-lg"
                        : "bg-orange-500 hover:bg-orange-600 hover:shadow-md"
                    }`}
                  >
                    <FaShoppingCart /> Add
                  </button>
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-2 rounded-md text-sm"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-100 hover:bg-red-200 text-red-600 px-2 rounded-md text-sm"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Shop;
