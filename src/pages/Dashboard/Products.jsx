import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Products() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "Lighting",
    image: "",
  });

  // ✅ Categories
  const categories = ["All", "Lighting", "Tools", "Cables", "Switches", "Accessories"];

  // ✅ Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Add new product
  const handleSave = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/products", newProduct);
      alert("✅ Product added successfully!");
      setIsModalOpen(false);
      setNewProduct({ name: "", price: "", category: "Lighting", image: "" });
      fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
      alert("❌ Failed to add product");
    }
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("❌ Failed to delete product");
    }
  };

  // ✅ Edit (optional future feature)
  const handleEdit = (product) => {
    alert(`Edit product: ${product.name} (Coming soon)`);
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  // ✅ Filter and sort
  const filteredProducts = products
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <aside
        className={`bg-gray-200 border-r border-white fixed lg:static top-0 left-0 w-64 lg:w-1/4 xl:w-1/5 h-full transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 z-40 p-4`}
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
              onClick={() => setSelectedCategory(cat)}
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

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main */}
      <main className="flex-1 lg:w-3/4 xl:w-4/5 p-4 sm:p-6 lg:p-8">
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

          <button
            onClick={handleAdd}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm text-sm flex items-center gap-2"
          >
            <FaPlus /> Add Product
          </button>
        </div>

        {/* Products Grid */}
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
              <p className="text-gray-600 text-xs mb-3">
                Category: {p.category}
              </p>
              <div className="mt-auto flex gap-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="flex-1 py-1.5 rounded-md text-sm bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="flex-1 py-1.5 rounded-md text-sm bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-96 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={18} />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Add New Product
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
              />
              <input
                type="number"
                placeholder="Price (DA)"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
              />
              <select
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
              >
                {categories
                  .filter((c) => c !== "All")
                  .map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
              </select>
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md mt-5 font-medium"
            >
              Save Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
