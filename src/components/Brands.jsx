import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const brands = [
  { id: 1, img: "/images/brands/bms.svg", name: "BMS Electric" },
  { id: 2, img: "/images/brands/mono.webp", name: "Mono Electric" },
  { id: 3, img: "/images/brands/energical.webp", name: "Satim" },
  { id: 4, img: "/images/brands/plastelac.png", name: "Condor" },
  { id: 5, img: "/images/brands/senia.webp", name: "Iris" },
  { id: 6, img: "/images/brands/cinqulac.svg", name: "SarlTek" },
];

export default function BrandsSection() {
  const [duration, setDuration] = useState(18);
  const loopBrands = [...brands, ...brands];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setDuration(25);
      else if (window.innerWidth < 1024) setDuration(20);
      else setDuration(18);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-white text-center relative overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-orange-600"
      >
        Shop by Brand
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 mt-2 mb-10 text-base"
      >
        Discover trusted Algerian electrical brands — all in one place.
      </motion.p>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Back-and-forth scroll container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-16 sm:gap-12 xs:gap-8"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration,
            repeat: Infinity,
          }}
        >
          {loopBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 w-40 sm:w-32 xs:w-28 flex justify-center items-center"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="h-16 sm:h-12 xs:h-10 object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
