import React from "react";
import { FaEnvelope } from "react-icons/fa";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Image Section */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-50 via-white to-gray-100 items-center justify-center">
        <img
          src="/images/forgott.png"
          alt="Forgot Password Illustration"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
            Forgot Your Password?
          </h1>

          <p className="text-center text-gray-600 mb-6">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-orange-500">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
            >
              Send Reset Link
            </button>

            {/* Link Back to Login */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Remembered your password?{" "}
              <a href="/login" className="text-orange-600 hover:underline">
                Go back to Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
