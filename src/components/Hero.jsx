import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/Electricidad Nico - Ventas online_files/home.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 md:px-12 max-w-2xl flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
          Power Up Your Projects with{" "}
          <span className="text-orange-400">ElectroDZ ⚡</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-200 mb-6 sm:mb-8 text-base sm:text-lg max-w-xl">
          Discover a wide range of electrical materials — cables, switches,
          LEDs, and tools. Fast delivery anywhere in Algeria ⚡
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-md bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg overflow-hidden mb-6 sm:mb-8 transition-all duration-300 focus-within:bg-white/30">
          <input
            type="text"
            placeholder="Search for products, brands..."
            className="flex-grow px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-200 bg-transparent outline-none text-sm sm:text-base"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-2 sm:py-3 flex items-center justify-center transition">
            <FaSearch className="text-sm sm:text-base" />
          </button>
        </div>

        {/* Shop Now Button */}
        <button className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-[0_4px_15px_rgba(255,115,0,0.5)] hover:shadow-[0_6px_20px_rgba(255,115,0,0.6)] transition-all duration-300 transform hover:-translate-y-1">
          Shop Now <FaArrowRight className="text-sm sm:text-base" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
