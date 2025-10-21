import React from "react";
import { motion } from "framer-motion";

export default function AboutAndOffer() {
  return (
    <section className="bg-white">
      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start gap-6">
        {/* Left: Title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-orange-500 md:w-1/2"
        >
          Leaders in Wholesale Electrical Materials
        </motion.h2>

        {/* Right: Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-sm md:text-base md:w-1/2"
        >
          With 30+ years of experience, we supply electrical materials and lighting nationwide.  
          Strong client and supplier relationships ensure trust and reliable service.  
          Our trained staff guarantees a smooth shopping experience for Electricidad Nico customers.
        </motion.p>
      </div>

      {/* Business Offer Section */}
      <section className="py-6 bg-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left text */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-bold"
          >
            Discounts, services, and tools for your business
          </motion.h2>

          {/* Right text */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm md:text-base max-w-md"
          >
            THE BEST PRICES IN ONE PLACE. Register to see updated prices and place orders quickly and securely.
          </motion.p>
        </div>
      </section>
    </section>
  );
}
