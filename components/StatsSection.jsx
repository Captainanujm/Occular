"use client";
import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    { number: "10K+", label: "Active Customers" },
    { number: "5K+", label: "Medicines & Products" },
    { number: "120+", label: "Partnered Suppliers" },
    { number: "24/7", label: "Support Availability" },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-[#0b1213] via-[#0f1d1f] to-[#0b1213]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-teal-300 mb-12"
        >
          Trusted Healthcare Partner
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-[#132b2d]/50 backdrop-blur-md
              border border-teal-500/20 shadow-xl
              hover:border-teal-400/40 hover:shadow-teal-500/40
              transition-all duration-400"
            >
              <h3 className="text-4xl font-extrabold text-teal-300 drop-shadow">
                {item.number}
              </h3>
              <p className="text-gray-300 mt-2 tracking-wide">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
