import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://final-project-electrodz-backend.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage("✅ Login successful!");

        // ✅ Save user info globally + localStorage
        const userData = {
          email: data.email,
          role: data.role, // Backend must send "admin" or "user"
        };
        login(userData);

        console.log("Logged in user:", userData);

        // ✅ Redirect according to role
        setTimeout(() => {
          if (userData.role === "admin") navigate("/dashboard");
          else navigate("/");
        }, 500);
      } else {
        setMessage(data.message || "❌ Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-50 via-white to-gray-100 items-center justify-center">
        <img
          src="/images/forget.png"
          alt="Login Illustration"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-orange-500">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:ring-2 focus-within:ring-orange-500">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-orange-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
            >
              Login
            </button>

            {message && <p className="text-center text-sm mt-3 text-gray-700">{message}</p>}

            <p className="text-center text-gray-600 text-sm mt-4">
              Don’t have an account?{" "}
              <a href="/register" className="text-orange-600 hover:underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
