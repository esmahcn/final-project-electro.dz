import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    cartCount,
    removeFromCart,
    resetCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // ✅ Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center p-8">
        <h1 className="text-2xl font-bold text-orange-600 mb-4">
          Your Cart is Empty
        </h1>
        <Link
          to="/shop"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-orange-600">
        Shopping Cart ({cartCount})
      </h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="font-bold text-orange-600">{item.price} DA</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
              >
                <FaMinus size={12} />
              </button>
              <span className="font-semibold text-gray-800">{item.qty}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
              >
                <FaPlus size={12} />
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-600 p-2"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}

        {/* Total + Actions */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={resetCart}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>

          <div className="flex items-center gap-6">
            <h2 className="text-lg font-bold text-gray-800">
              Total:{" "}
              <span className="text-orange-600">{total.toLocaleString()} DA</span>
            </h2>
            <Link
              to="/checkout"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
