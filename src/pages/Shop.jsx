import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";

// Mock product data
const productsData = [
  { id: 1, name: "LED Bulb 9W", price: 150, image: "/images/Electricidad Nico - Ventas online_files/595708.jpg", category: "Lighting", description: "High-quality LED bulb 9W, energy-saving and long-lasting." },
  { id: 2, name: "Extension Cord 5m", price: 300, image: "/images/Electricidad Nico - Ventas online_files/595708.jpg", category: "Cables", description: "5 meters extension cord, durable and safe for home use." },
  { id: 3, name: "Switch 1 Gang", price: 200, image: "/images/Electricidad Nico - Ventas online_files/595708.jpg", category: "Electrical", description: "Single gang switch, easy to install." },
  { id: 4, name: "Socket 2 Gang", price: 250, image: "/images/Electricidad Nico - Ventas online_files/595708.jpg", category: "Electrical", description: "2 gang socket, compatible with most plugs." },
  { id: 5, name: "LED Strip 5m", price: 1200, image: "/images/Electricidad Nico - Ventas online_files/595708.jpg", category: "Lighting", description: "5 meters LED strip, bright and flexible." },
];

const categories = ["All", "Lighting", "Cables", "Electrical"];

function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("name-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = productsData
    .filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "All" || p.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      return a.name.localeCompare(b.name);
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 gap-6 bg-gray-50 relative">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden absolute top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded flex items-center gap-1"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars /> Filters
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-gray-100 border border-white p-4 rounded-lg z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:sticky md:top-8 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto`}
      >
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat} className="mb-1">
              <button
                onClick={() => {
                  setSelectedCategory(cat);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left py-2 px-2 rounded-l-lg hover:bg-orange-100 transition flex items-center ${
                  selectedCategory === cat
                    ? "bg-orange-100 border-l-4 border-orange-500 font-semibold"
                    : ""
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1">
        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-white p-2 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-white p-2 rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="border border-white rounded-lg overflow-hidden shadow-sm transform transition duration-300 hover:shadow-xl hover:-translate-y-1 bg-white relative group"
            >
              {/* Image with hover effects */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90"
                />
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
                  <button
                    className="bg-white p-2 rounded-full mb-2 hover:bg-orange-50 transition"
                    onClick={() => {
                      setQuickViewProduct(product);
                      setQuantity(1);
                    }}
                  >
                    <FaSearch className="text-orange-500" />
                  </button>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-orange-500 mb-1">{product.category}</p>
                <p className="text-gray-800 font-bold">{product.price} DZD</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-orange-200 disabled:text-white disabled:opacity-50 transition"
          >
            Previous
          </button>

          <span className="px-3 py-2 rounded bg-white border border-white text-gray-800">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-orange-200 disabled:text-white disabled:opacity-50 transition"
          >
            Next
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto p-4 transition-opacity duration-300">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative transform scale-95 animate-[fadeIn_0.3s_forwards]">
            <button
              className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
              onClick={() => setQuickViewProduct(null)}
            >
              ×
            </button>
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{quickViewProduct.name}</h2>
            <p className="text-orange-500 mb-2">{quickViewProduct.category}</p>
            <p className="text-gray-800 font-bold mb-2">{quickViewProduct.price} DZD</p>
            <p className="text-gray-600 mb-4">{quickViewProduct.description}</p>
            <div className="flex items-center mb-4">
              <span className="mr-2">Quantity:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-white rounded p-1 w-16 text-center focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 w-full">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
