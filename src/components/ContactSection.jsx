import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Hide the message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-white py-8 md:py-12" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6 md:mb-8 text-center md:text-left">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:gap-5 relative"
          >
            <form className="flex flex-col gap-2 md:gap-3" onSubmit={handleSubmit}>
              <div className="relative">
                <FaUser className="absolute top-2.5 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="border border-gray-300 rounded-lg px-9 py-1.5 md:py-2 text-xs md:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-300 w-full transition"
                />
              </div>

              <div className="relative">
                <FaBuilding className="absolute top-2.5 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border border-gray-300 rounded-lg px-9 py-1.5 md:py-2 text-xs md:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-300 w-full transition"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-2.5 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="border border-gray-300 rounded-lg px-9 py-1.5 md:py-2 text-xs md:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-300 w-full transition"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute top-2.5 left-3 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg px-9 py-1.5 md:py-2 text-xs md:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-300 w-full transition"
                />
              </div>

              <div className="relative">
                <FaCommentDots className="absolute top-2.5 left-3 text-gray-400" />
                <textarea
                  placeholder="Write your message here"
                  rows={3}
                  required
                  className="border border-gray-300 rounded-lg px-9 py-1.5 md:py-2 text-xs md:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-300 w-full resize-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white font-medium py-1.5 md:py-2 rounded-lg text-sm hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>

            {/* Thank You Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-0 left-0 w-full bg-orange-100 border border-orange-400 text-orange-700 p-3 rounded-lg mt-2 text-center font-medium"
                >
                  Thank you! Your message has been sent.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/images/Electricidad Nico - Ventas online_files/EN_workman.png"
              alt="Contact"
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
