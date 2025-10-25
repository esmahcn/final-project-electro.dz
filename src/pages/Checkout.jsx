import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, resetCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "esmahacene@gmail.com",
    address: "",
    payment: "cash",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    resetCart();
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (orderPlaced) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-3">
          ✅ Order Placed Successfully!
        </h1>
        <p className="text-gray-700">
          Thank you, {form.name || "Customer"}! Your order will be processed soon.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* 🖼️ Left Side Image */}
      <div className="hidden md:flex md:w-1/2 bg-white-600 justify-center items-center">
        <img
          src="/images/Electricidad Nico - Ventas online_files/checkouit.webp"
          alt="Checkout illustration"
          className="w-4/5 rounded-2xl shadow-lg"
        />
      </div>

      {/* 🧾 Right Side - Form & Summary */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-orange-600 mb-6 text-center">
            Checkout
          </h1>

          {/* Billing Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your full address"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Payment Method</label>
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Credit / Debit Card</option>
              </select>
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Order Summary
              </h2>
              {cartItems.length > 0 ? (
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span>{(item.price * item.qty).toLocaleString()} DA</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No items in cart</p>
              )}

              <div className="flex justify-between font-bold mt-4 text-gray-800">
                <span>Total:</span>
                <span className="text-orange-600">
                  {total.toLocaleString()} DA
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 mt-6 rounded-lg hover:bg-orange-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
