import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaSearch,
  FaShoppingCart,
  FaEye,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    "All",
    "Iluminación",
    "Herramientas",
    "Cables",
    "Interruptores",
    "Accesorios",
  ];

  const products = [
    { id: 1, name: "Cable de Cobre 10mm", price: 1500, category: "Cables", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
    { id: 2, name: "Lámpara LED 20W", price: 800, category: "Iluminación", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
    { id: 3, name: "Destornillador Eléctrico", price: 2300, category: "Herramientas", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
    { id: 4, name: "Interruptor Doble", price: 700, category: "Interruptores", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
    { id: 5, name: "Toma Corriente", price: 900, category: "Accesorios", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
    { id: 6, name: "Bombilla LED 10W", price: 500, category: "Iluminación", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
     { id: 7, name: "Interruptor Doble", price: 700, category: "Interruptores", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
    { id: 8, name: "Toma Corriente", price: 900, category: "Accesorios", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
    { id: 9, name: "Bombilla LED 10W", price: 500, category: "Iluminación", image: "/images/Electricidad Nico - Ventas online_files/595708.jpg" },
  ];

  // Sticky sidebar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = products
    .filter(
      (p) => selectedCategory === "All" || p.category === selectedCategory
    )
    .sort((a, b) =>
      sortOrder === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  const handleAddToCart = (id) => {
    setClickedButton(id);
    setTimeout(() => setClickedButton(null), 300);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
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
          <h2 className="text-lg font-semibold text-gray-700">Categorías</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-600">
            <FaTimes size={20} />
          </button>
        </div>

        <h2 className="hidden lg:block text-lg font-semibold text-gray-700 mb-4">
          Categorías
        </h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSidebarOpen(false);
              }}
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

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:w-3/4 xl:w-4/5 p-4 sm:p-6 lg:p-8">
        {/* Top controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            className="lg:hidden p-2 border border-white bg-gray-100 rounded flex items-center gap-2 text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars /> Filters
          </button>

          <div className="flex items-center border border-white bg-white rounded-md px-3 py-2 w-full sm:w-72">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Buscar producto..."
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center border border-white bg-white rounded-md px-3 py-2">
            <FaChevronDown className="text-gray-400 mr-2" />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent outline-none text-sm"
            >
              <option value="A-Z">Nombre: A-Z</option>
              <option value="Z-A">Nombre: Z-A</option>
            </select>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-white rounded-lg shadow-sm hover:shadow-md transition p-3 flex flex-col"
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
                  onClick={() => handleAddToCart(p.id)}
                  className={`flex-1 py-1.5 rounded-md text-sm flex items-center justify-center gap-2 text-white transition-all duration-200 ${
                    clickedButton === p.id
                      ? "bg-orange-600 scale-95 shadow-lg"
                      : "bg-orange-500 hover:bg-orange-600 hover:shadow-md"
                  }`}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  onClick={() => handleViewProduct(p)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 rounded-md text-sm flex items-center justify-center"
                >
                  <FaEye />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          <button className="px-3 py-1 border border-white bg-gray-100 rounded hover:bg-gray-200">
            1
          </button>
          <button className="px-3 py-1 border border-white bg-gray-100 rounded hover:bg-gray-200">
            2
          </button>
          <button className="px-3 py-1 border border-white bg-gray-100 rounded hover:bg-gray-200">
            3
          </button>
        </div>
      </main>

      {/* Product Detail Zoom (no dark background) */}
      {selectedProduct && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-transparent"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-80 sm:w-[400px] transform scale-100 transition-all duration-300 hover:scale-105 p-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={18} />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-orange-600 font-bold mb-2">
              {selectedProduct.price} DA
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Categoría:{" "}
              <span className="font-medium">{selectedProduct.category}</span>
            </p>
            <button
              onClick={() => {
                handleAddToCart(selectedProduct.id);
                closeModal();
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
