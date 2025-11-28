"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// Custom Card Component (glass effect)
const Card = ({ children, className }) => (
  <div className={`rounded-2xl backdrop-blur-xl bg-teal-900/40 border border-teal-600 shadow-xl hover:shadow-2xl transition ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-8 ${className}`}>{children}</div>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-gray-950 text-gray-100 flex flex-col items-center pt-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-6 text-teal-300 tracking-wide"
      >
        About Ocular Pharmaceuticals
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-center text-xl leading-relaxed mb-12 text-gray-300"
      >
        Ocular Pharmaceuticals is an innovative medical platform committed to making healthcare more
        accessible, transparent, and patient-focused. Our goal is to deliver trusted information and a
        seamless experience for exploring pharmaceutical products and medical insights.
      </motion.p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Card>
            <CardContent className="text-center">
              <h2 className="text-2xl font-semibold text-teal-300 mb-3">Our Vision</h2>
              <p className="text-gray-200 leading-relaxed">
                To transform healthcare through advanced digital solutions, enabling safe and accurate
                access to pharmaceutical knowledge for individuals worldwide.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card>
            <CardContent className="text-center">
              <h2 className="text-2xl font-semibold text-teal-300 mb-3">Our Mission</h2>
              <p className="text-gray-200 leading-relaxed">
                To empower patients, pharmacists, and healthcare professionals with reliable product
                details, ethical accessibility, and an intuitive digital experience.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Card>
            <CardContent className="text-center">
              <h2 className="text-2xl font-semibold text-teal-300 mb-3">Why Choose Us</h2>
              <p className="text-gray-200 leading-relaxed">
                Secure, modern, data-driven healthcare support with a beautifully crafted user
                experience focused on trust, comfort, and accessibility.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-16">
        <Link href="/contact" className="ml-4">
  <button className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-lg hover:shadow-teal-700/40 transition-all duration-300">
    Contact Us
  </button>
</Link>
      </motion.div>
    </div>
  );
}