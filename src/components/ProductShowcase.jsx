import React from "react";
import { motion } from "framer-motion";

function ProductShowcase() {
  const sections = [
    {
      title: "New Arrivals",
      linkText: "View all",
      products: [
        { name: 'Bolt Cutter 36" (910mm) CROSSMASTER 9970121 *', code: "595343", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/595262.jpg" },
        { name: 'Diagonal Cutting Plier 6½" CROSSMASTER 9970126 *', code: "595269", bulk: "3", img: "/images/Electricidad Nico - Ventas online_files/595269.jpg" },
        { name: "Automatic Wire Stripper 170mm CROSSMASTER 9969802 *", code: "595262", bulk: "10", img: "/images/Electricidad Nico - Ventas online_files/595343.jpg" },
        { name: "Toolbox with Wheels CROSSMASTER 9931044 *", code: "595708", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/595585.jpg" },
      ],
    },
    {
      title: "Best Sellers",
      linkText: "View all",
      products: [
        { name: "Cable Unipolar 1x2.5 V/A Trefilcon *", code: "280016", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/280019.jpg" },
        { name: "Cable Unipolar 1x4 Blue Trefilcon *", code: "280021", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/280016.jpg" },
        { name: "Cable Unipolar 1x4 Brown Trefilcon *", code: "280020", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/280020.jpg" },
        { name: "Cable Unipolar 1x4 Red Trefilcon *", code: "280019", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/280021.jpg" },
      ],
    },
    {
      title: "Suggested for You",
      linkText: "View all",
      products: [
        { name: '1/2" Hose Connector MARSICO HOGJAR011', code: "190071", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/190071.jpg" },
        { name: '3/4" Hose Connector MARSICO', code: "720050", bulk: "300", img: "/images/Electricidad Nico - Ventas online_files/720053.jpg" },
        { name: "Reinforced Hose 1/2 x 15m MC MR1315 *", code: "720051", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/720051.jpg" },
        { name: "Reinforced Hose 3/4 x 15m MC MR1915 *", code: "720053", bulk: "1", img: "/images/Electricidad Nico - Ventas online_files/720050.jpg" },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white to-orange-50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform border border-gray-200 flex flex-col"
            >
              {/* Sticky Section Header */}
              <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-white sticky top-0 z-10">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-0">{section.title}</h2>
                <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  {section.linkText}
                </button>
              </div>

              {/* Products List */}
              <ul
                className="p-3 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-100"
                style={{ maxHeight: "280px" }}
              >
                {section.products.map((p, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 6px 15px rgba(0,0,0,0.15)" }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 pb-2 last:border-none rounded-md cursor-pointer flex items-center gap-3 bg-white p-2"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-0">{p.name}</p>
                      <p className="text-xs text-gray-500">
                        Code: <span className="font-medium">{p.code}</span> | Bulk:{" "}
                        <span className="font-medium">{p.bulk}</span>
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
