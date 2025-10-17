import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import ProductShowcase from "../components/ProductShowcase";
const Home = () => {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturesSection />
       <ProductShowcase />
    </div>
  );
};

export default Home;