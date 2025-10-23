import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Image Section */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-50 via-white to-gray-100 items-center justify-center">
        <img
          src="/images/regiterphoto.png"
          alt="Register Illustration"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
            Create Account
          </h1>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-orange-500">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full outline-none"
                />
              </div>
            </div>

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

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-orange-500">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 accent-orange-500"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I accept the{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
            >
              Register
            </button>

            {/* Link to Login */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-orange-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
