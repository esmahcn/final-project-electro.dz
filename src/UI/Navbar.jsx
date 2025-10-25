import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const navigate = useNavigate(); // ✅ Add navigation

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

        {/* Search Bar */}
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
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-orange-600"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            {openMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Cart - added navigation */}
          <button
            onClick={() => navigate("/cart")}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold px-1.5 rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setOpenUserMenu((prev) => !prev)}
              className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
            >
              <FaUser />
            </button>

            {openUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <ul className="text-gray-700 text-sm">
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-orange-50"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/forgot-password"
                      className="block px-4 py-2 hover:bg-orange-50"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      Forgot Password
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block px-4 py-2 hover:bg-orange-50"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Row: Navigation Menu */}
      <nav className="bg-orange-500 text-white text-sm font-medium relative">
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
          <div className="absolute inset-0 bg-black/40"></div>
          <div
            className={`absolute top-0 right-0 w-64 h-full bg-orange-500 transform transition-transform duration-300 ease-in-out ${
              openMobileMenu ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
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
                    onClick={() => setOpenMobileMenu(false)}
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
