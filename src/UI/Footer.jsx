import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [visibleSections, setVisibleSections] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;
      const top = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        [0, 1, 2, 3, 4, 5].forEach((i) => {
          setTimeout(() => {
            setVisibleSections((prev) => {
              const newState = [...prev];
              newState[i] = true;
              return newState;
            });
          }, i * 150);
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = (index) =>
    `transition-all duration-700 ${visibleSections[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <footer
      id="footer"
      className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 relative"
    >
      {/* Top description with animated orbiting dots */}
      <div className={`relative text-center mb-10 max-w-2xl mx-auto px-4 ${fadeUp(0)}`}>
        <p className="text-gray-300 relative z-10">
          Committed to fully satisfying our customers' needs based on respect, warmth, and professionalism.
        </p>

        {/* Orbiting decorative dots */}
    {/* Orbiting decorative “particle” dots */}
<span className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-2 left-8 animate-orbit-blue"></span>
<span className="absolute w-2 h-2 bg-pink-500 rounded-full top-6 right-16 animate-orbit-pink"></span>
<span className="absolute w-1 h-1 bg-yellow-400 rounded-full top-10 left-1/3 animate-orbit-yellow"></span>
<span className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full top-4 left-1/2 animate-orbit-blue"></span>
<span className="absolute w-2 h-2 bg-pink-300 rounded-full top-1 right-10 animate-orbit-pink"></span>
      </div>
      {/* Footer sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left mb-10">
        {/* About Us */}
        <div className={fadeUp(1)}>
          <h3 className="font-bold text-lg mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-gray-400">
            {["Our Commitment", "Contact Us", "Work with Us"].map((item, idx) => (
              <li
                key={idx}
                className="relative cursor-pointer text-gray-400 group hover:text-white transition-colors"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Information */}
        <div className={fadeUp(2)}>
          <h3 className="font-bold text-lg mb-4">IMPORTANT INFORMATION</h3>
          <ul className="space-y-2 text-gray-400">
            {["Frequently Asked Questions", "Terms and Conditions", "Privacy and Cookie Policy"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="relative cursor-pointer text-gray-400 group hover:text-white transition-colors"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className={fadeUp(3)}>
          <h3 className="font-bold text-lg mb-4">CONTACT</h3>
          <p className="text-gray-400">Int. Rafael Amato 1050 (Bulnes & Colegio Emaús)</p>
          <p className="text-gray-400">El Palomar - B1685BYB</p>
          <p className="flex items-center justify-center sm:justify-start mt-2 text-gray-400">
            <FaPhoneAlt className="mr-2" /> +54 11 5980-4140
          </p>
          <p className="flex items-center justify-center sm:justify-start mt-1 text-gray-400">
            <FaEnvelope className="mr-2" /> sales@electricidadnico.com.ar
          </p>
        </div>

        {/* Newsletter & Social */}
        <div className={fadeUp(4)}>
          <h3 className="font-bold text-lg mb-4">NEWSLETTER</h3>
          <p className="text-gray-400 mb-4">Subscribe to get our latest updates and offers.</p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start mb-4 gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto flex-1 p-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r text-white transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-blue-700">
              Subscribe
            </button>
          </div>
          <div className="flex justify-center sm:justify-start space-x-4 mt-2">
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-200 text-gray-400 hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-200 text-gray-400 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-200 text-gray-400 hover:text-blue-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className={`text-center border-t border-gray-700 pt-6 ${fadeUp(5)}`}>
        <p className="text-gray-500">© 2025 ElectroDZ. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
