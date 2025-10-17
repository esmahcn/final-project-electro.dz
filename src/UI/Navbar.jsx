import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      {/* Top Row: Logo + Search + Icons */}
      <div className="flex items-center justify-between px-8 py-3 border-b border-gray-200">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">ElectroDZ ⚡</div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition">
            <FaShoppingCart />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
            >
              <FaUser />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <ul className="text-gray-700 text-sm">
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">My Account</li>
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">Orders</li>
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">Wishlist</li>
                  <li className="border-t my-1"></li>
                  <li className="px-4 py-2 text-red-500 hover:bg-orange-50 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Row: Menu */}
      <nav className="flex justify-center bg-orange-500 text-white text-sm font-medium">
        <ul className="flex gap-8 py-3">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Shop</li>
          <li className="hover:text-gray-200 cursor-pointer">Categories</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
