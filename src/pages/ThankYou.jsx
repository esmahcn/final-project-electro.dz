import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md">
        <img
          src="/img/thankyou.webp"
          alt="Thank you"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-3xl font-bold text-green-600 mb-3">
          🎉 Thank You for Your Order!
        </h1>
        <p className="text-gray-700 mb-6">
          Your order has been received and is now being processed.
        </p>

        <Link
          to="/shop"
          className="inline-block px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          Continue Shopping
        </Link>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Need help? Contact us at{" "}
        <a
          href="mailto:esmahacene@gmail.com"
          className="text-orange-600 hover:underline"
        >
          esmahacene@gmail.com
        </a>
      </p>
    </div>
  );
}

export default ThankYou;
