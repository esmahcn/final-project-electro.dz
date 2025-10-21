import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      {/* Top Row: Logo + Search + Icons */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-200">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">ElectroDZ ⚡</div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-orange-600"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            {openMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Cart */}
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition">
            <FaShoppingCart />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setOpenUserMenu(!openUserMenu)}
              className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
            >
              <FaUser />
            </button>

            {openUserMenu && (
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
      <nav className="bg-orange-500 text-white text-sm font-medium relative">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-8 py-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-gray-200 font-bold" : "hover:text-gray-200"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu + Overlay */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
            openMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpenMobileMenu(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Side Drawer (slide from right) */}
          <div
            className={`absolute top-0 right-0 w-64 h-full bg-orange-500 transform transition-transform duration-300 ease-in-out
              ${openMobileMenu ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside menu
          >
            <ul className="flex flex-col gap-4 py-8 px-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-200 font-bold block py-2 text-lg"
                        : "hover:text-gray-200 block py-2 text-lg"
                    }
                    onClick={() => setOpenMobileMenu(false)} // close menu on click
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
