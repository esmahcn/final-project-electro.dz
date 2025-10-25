import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="font-sans flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
