import React from "react";
import { motion } from "framer-motion";

function FeaturesSection() {
  const features = [
    { title: "Excellent Financing", description: "ElectroDZ offers you exclusive business credit to support your company’s growth.", icon: "💳" },
    { title: "Wide Stock Availability", description: "We maintain a permanent stock with over 4,000 certified products that meet all current standards.", icon: "📦" },
    { title: "Expert Guidance", description: "Our qualified sales team provides continuous advice and professional support.", icon: "👨‍🔧" },
    { title: "Fast Delivery Within 96 Hours", description: "Our own logistics system ensures your orders arrive on time, every time.", icon: "🚚" },
  ];

  return (
    <section className="py-12 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Why Choose <span className="text-orange-500">ElectroDZ</span> ⚡
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0], transition: { duration: 0.6 } }}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-500 text-white text-4xl mb-6 shadow-md cursor-pointer"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-orange-500 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
