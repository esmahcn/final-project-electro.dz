import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Categories() {
  const navigate = useNavigate();

  // ✅ Use same category names as in your Shop page
  const categories = [
    {
      name: "Lighting",
      image: "/img/light.jpg",
      description: "Energy-efficient lighting for home and industry.",
    },
    {
      name: "Tools",
      image: "/img/tools.jpg",
      description: "High-quality tools for every electrical project.",
    },
    {
      name: "Cables",
      image: "/img/cables.jpg",
      description: "Durable and safe cables for all your installations.",
    },
    {
      name: "Switches",
      image: "/img/switches.jpg",
      description: "Reliable switches and control devices.",
    },
    {
      name: "Accessories",
      image: "/img/accessories.jpg",
      description: "All accessories you need to complete your setup.",
    },
  ];

  const handleCategoryClick = (name) => {
    navigate(`/shop?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* 🟠 Header Section */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-3 uppercase tracking-wide text-orange-600">
          Our Categories
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of electrical products — tools, components, and lighting solutions.
        </p>
      </section>

      {/* 🧰 Categories Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {cat.name}
              </h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 🧾 CTA Section */}
      <section className="bg-orange-500 text-white text-center py-12 mt-6">
        <h2 className="text-2xl font-semibold mb-3">
          Need Help Finding Something?
        </h2>
        <p className="mb-6">
          Contact us today — our team is happy to guide you to the right product.
        </p>
        <a
          href="/contact"
          className="bg-white text-orange-600 px-6 py-3 rounded-md font-semibold hover:bg-orange-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default Categories;
