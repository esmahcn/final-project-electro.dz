import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import ProductShowcase from "../components/ProductShowcase";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
const Home = () => {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FeaturesSection />
       <ProductShowcase />
          <Brands />
           <FeaturedProducts />
            <AboutSection />
            <ContactSection />
    </div>
  );
};

export default Home;