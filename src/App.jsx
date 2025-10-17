import React from "react";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
