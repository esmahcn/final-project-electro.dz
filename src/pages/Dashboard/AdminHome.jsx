import React from "react";

const AdminHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
        <p className="text-3xl font-bold text-orange-600 mt-2">45</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-700">Total Orders</h2>
        <p className="text-3xl font-bold text-orange-600 mt-2">18</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
        <p className="text-3xl font-bold text-orange-600 mt-2">12</p>
      </div>
    </div>
  );
};

export default AdminHome;
