import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* 🔸 Header Section */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 py-16 text-center border-b border-gray-200">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 uppercase tracking-wide mb-4"
        >
          About ElectroDZ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-600"
        >
          We are dedicated to providing high-quality electrical and electronic
          products for both professionals and individuals, with the best service
          and technical support.
        </motion.p>
      </section>

      {/* 💡 Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ElectroDZ was founded with a clear purpose — to bring reliable,
            innovative, and accessible electrical materials to everyone. Our
            mission is to make your work easier by offering trusted brands,
            expert advice, and excellent customer care.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re a professional electrician, a business, or a
            homeowner, we provide solutions that meet your needs with efficiency
            and trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-md"
        >
          <img
            src="/images/Electricidad Nico - Ventas online_files/EN_workman.png"
            alt="About ElectroDZ"
            className="w-full h-[350px] object-cover"
          />
        </motion.div>
      </section>

      {/* ⚙️ Our Mission & Values */}
      <section className="bg-orange-50 py-16">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-orange-600 mb-6">
            Our Mission & Values
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            At ElectroDZ, our goal is to support innovation, safety, and
            sustainability in every project. We believe in continuous learning,
            teamwork, and customer satisfaction as the foundation of our
            success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                title: "Quality",
                desc: "We deliver reliable products from trusted brands.",
              },
              {
                title: "Innovation",
                desc: "We adapt to the latest technologies and market needs.",
              },
              {
                title: "Trust",
                desc: "We build long-term relationships based on integrity.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 🤝 Join Our Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-3xl font-semibold text-orange-500 mb-6">
          Join Our Team
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          We are always looking for passionate individuals to join our growing
          team. If you share our vision and want to be part of ElectroDZ, don’t
          hesitate to contact us or send your CV.
        </p>
        <a
          href="/contact"
          className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
}

export default About;
