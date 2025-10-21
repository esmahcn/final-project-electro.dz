import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create 40 random stars
    const temp = Array.from({ length: 40 }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2, // radius 2-6
      twinkleDuration: Math.random() * 3 + 2, // 2-5 seconds
      twinkleDelay: Math.random() * 3,
    }));
    setStars(temp);
  }, []);

  return (
    <section className="py-16 relative bg-orange-50 text-gray-800 overflow-hidden">
      {/* Twinkling stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white opacity-50"
            style={{
              width: s.size * 2,
              height: s.size * 2,
              top: s.y,
              left: s.x,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: s.twinkleDuration,
              delay: s.twinkleDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-10">
        {/* Title on the left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/3 flex items-start"
        >
          <div className="flex items-start gap-4">
            <div className="w-1 bg-orange-500 rounded-full"></div>
            <motion.h2
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold text-orange-500"
            >
              Celebrating 30 Years of Boutique Excellence
            </motion.h2>
          </div>
        </motion.div>

        {/* Paragraphs on the right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-2/3 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition space-y-4 text-gray-700 text-base lg:text-lg leading-relaxed"
        >
          <p>
            For over 30 years, our boutique has been serving the community with high-quality electrical materials and personalized service. Now, for the first time, we bring our boutique online!
          </p>
          <p>
            We are proud to continue our tradition of trust and close relationships with our customers, now through a convenient online shopping experience.
          </p>
          <p>
            Our goal is simple: make it easy for you to find the products you need with the same care and attention you would get in our boutique.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
