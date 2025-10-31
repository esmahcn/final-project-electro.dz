import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-5">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <nav className="flex flex-col gap-3">
         <Link to="/dashboard/products" className="hover:text-orange-400">
  Products
</Link>
         <Link to="/dashboard/orders" className="hover:text-orange-400">
  Orders
</Link>
<Link to="/dashboard/users" className="hover:text-orange-400">
  Users
</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
}

export default Dashboard;
