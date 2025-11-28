"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Reusable Card Component
const Card = ({ children }) => (
  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition">
    {children}
  </div>
);

const CardContent = ({ children }) => <div className="p-8">{children}</div>;

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] to-[#0b3c49] text-gray-200 px-6 md:px-16 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          About <span className="text-teal-400">Occular Pharmaceuticals</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Occular Pharmaceuticals is a modern platform designed to help patients
          easily find medicines and locate medical stores. We focus on accessibility,
          convenience, and reliability to make healthcare simpler for everyone.
        </p>
      </motion.div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-3 text-teal-300">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To make medicines and medical stores accessible to everyone,
                ensuring patients can quickly find what they need, whenever they need it.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-3 text-teal-300">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To provide a reliable, user-friendly platform for browsing medicines
                and locating medical stores, helping patients make informed choices
                easily and safely.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-300">Why Choose Us</h2>
        <p className="text-gray-300 text-center md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Our platform is built for patients and medical store users alike, offering
          accurate medicine information, easy browsing, and reliable store locations.
          We prioritize convenience, speed, and trust in every feature we provide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold text-teal-300 mb-2">Easy Medicine Search</h3>
              <p className="text-gray-300 leading-relaxed">
                Quickly find medicines by name, category, or manufacturer for fast access.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold text-teal-300 mb-2">Reliable Store Locator</h3>
              <p className="text-gray-300 leading-relaxed">
                Find nearby medical stores with accurate addresses and contact information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold text-teal-300 mb-2">Secure & Modern</h3>
              <p className="text-gray-300 leading-relaxed">
                A clean, responsive interface ensures a smooth experience on any device.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-300">Our Core Values</h2>
        <p className="text-gray-300 text-center md:text-lg leading-relaxed max-w-4xl mx-auto mb-6">
          Accessibility, reliability, and simplicity guide every feature we build.
          We aim to make healthcare information clear and easy to navigate, so
          patients can focus on what matters most — their health.
        </p>
      </motion.div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full text-lg font-semibold bg-teal-500 hover:bg-teal-600 text-black shadow-xl transition"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
