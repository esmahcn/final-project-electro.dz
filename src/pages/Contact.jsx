import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-white">
      {/* 🔹 Header Section */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-extrabold mb-3 uppercase tracking-wide text-orange-500">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We’re here to help — reach out to us anytime for inquiries or support.
        </p>
      </section>

      {/* 📞 Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Contact Information
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <p>El Hamiz, Algiers, Algeria</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500 text-xl" />
              <p>+213 798 37 91 64</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 text-xl" />
              <p>esmahacene@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaClock className="text-orange-500 text-xl" />
              <p>Saturday to Thursday: 08:00 - 16:00</p>
            </div>
          </div>

          {/* 🌐 Follow Us */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 🏪 Boutique Photo Section */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold text-center text-orange-500 mb-6">
          Our Boutique
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/Electricidad Nico - Ventas online_files/EN_workman.png" // 🖼️ Replace with your actual image path
            alt="Our Boutique"
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* 📍 Map Section */}
      <section className="h-[400px] relative border-t border-gray-200">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6395.018949050731!2d3.1976!3d36.7221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadb342c6a2f7%3A0x9e9b173a8f9c6d4!2sEl%20Hamiz%2C%20Dar%20El%20Beida%2C%20Algiers%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1716080000000!5m2!1sen!2sdz"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
