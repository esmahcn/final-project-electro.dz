import React from "react";
import { Link } from "react-router-dom";
import { FaBox, FaShoppingCart, FaUsers, FaChartPie } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-orange-600 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6 text-center">ElectroDZ Admin</h2>

      <nav className="flex flex-col gap-3">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 hover:bg-orange-700 p-2 rounded"
        >
          <FaChartPie /> Dashboard
        </Link>

        <Link
          to="/dashboard/products"
          className="flex items-center gap-2 hover:bg-orange-700 p-2 rounded"
        >
          <FaBox /> Products
        </Link>

        <Link
          to="/dashboard/orders"
          className="flex items-center gap-2 hover:bg-orange-700 p-2 rounded"
        >
          <FaShoppingCart /> Orders
        </Link>

        <Link
          to="/dashboard/users"
          className="flex items-center gap-2 hover:bg-orange-700 p-2 rounded"
        >
          <FaUsers /> Users
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
