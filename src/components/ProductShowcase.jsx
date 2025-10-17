import React from "react";
import { motion } from "framer-motion";

function ProductShowcase() {
  const sections = [
    {
      title: "New Arrivals",
      linkText: "View all",
      products: [
        { name: 'Bolt Cutter 36" (910mm) CROSSMASTER 9970121', code: "595343", bulk: "1" },
        { name: 'Diagonal Cutting Plier 6½" CROSSMASTER 9970126', code: "595269", bulk: "3" },
        { name: "Automatic Wire Stripper 170mm CROSSMASTER 9969802", code: "595262", bulk: "10" },
        { name: "Toolbox with Wheels CROSSMASTER 9931044", code: "595708", bulk: "1" },
      ],
    },
    {
      title: "Best Sellers",
      linkText: "View all",
      products: [
        { name: "Cable Unipolar 1x2.5 V/A Trefilcon", code: "280016", bulk: "1" },
        { name: "Cable Unipolar 1x4 Blue Trefilcon", code: "280021", bulk: "1" },
        { name: "Cable Unipolar 1x4 Brown Trefilcon", code: "280020", bulk: "1" },
        { name: "Cable Unipolar 1x4 Red Trefilcon", code: "280019", bulk: "1" },
      ],
    },
    {
      title: "Suggested for You",
      linkText: "View all",
      products: [
        { name: '1/2" Hose Connector MARSICO HOGJAR011', code: "190071", bulk: "1" },
        { name: '3/4" Hose Connector MARSICO', code: "720050", bulk: "300" },
        { name: "Reinforced Hose 1/2 x 15m MC MR1315", code: "720051", bulk: "1" },
        { name: "Reinforced Hose 3/4 x 15m MC MR1915", code: "720053", bulk: "1" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {sections.map((section, i) => (
          <div key={i}>
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                {section.linkText}
              </button>
            </div>

            {/* Products List */}
            <ul className="space-y-4">
              {section.products.map((p, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-orange-300 hover:shadow-sm transition"
                >
                  <p className="text-sm font-semibold text-gray-800 mb-1">{p.name}</p>
                  <p className="text-xs text-gray-500">
                    Code: <span className="font-medium">{p.code}</span> | Bulk:{" "}
                    <span className="font-medium">{p.bulk}</span>
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;