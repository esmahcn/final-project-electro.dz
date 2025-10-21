import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const socials = [
  { id: 1, name: "Facebook", icon: <FaFacebookF />, link: "#" },
  { id: 2, name: "Instagram", icon: <FaInstagram />, link: "#" },
  { id: 3, name: "WhatsApp", icon: <FaWhatsapp />, link: "#" },
  { id: 4, name: "YouTube", icon: <FaYoutube />, link: "#" },
];

export default function SocialSection() {
  return (
    <section className="py-12 bg-white text-center" id="social">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">
        Follow Us
      </h2>
      <p className="text-gray-500 mb-8">
        Stay updated with our promotions, tips, and news
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {socials.map((social) => (
          <motion.a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600 text-3xl sm:text-4xl md:text-5xl transition-transform"
            aria-label={social.name}
            whileHover={{ scale: 1.3 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: social.id * 0.2 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
