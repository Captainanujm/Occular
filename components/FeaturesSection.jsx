"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Stethoscope, BadgeCheck } from "lucide-react";

export function FeaturesSection() {
  const features = [
    { icon: <ShieldCheck size={34} />, text: "100% Genuine Medicines" },
    { icon: <Truck size={34} />, text: "Fast & Safe Delivery" },
    { icon: <Stethoscope size={34} />, text: "Verified Pharmaceutical Network" },
    { icon: <BadgeCheck size={34} />, text: "Quality Assured Products" },
  ];

  return (
    <div className="py-20 bg-[#0f1d1f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-teal-300 mb-14"
        >
          Why Choose Our Medical Store?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12 }}
              className="
                group rounded-3xl p-8 bg-[#132b2d]/60 backdrop-blur-xl
                border border-teal-500/20 shadow-lg
                hover:bg-[#1a3d3f]/70 hover:border-teal-400/40
                hover:shadow-teal-500/40 hover:-translate-y-2
                transition-all duration-400 cursor-pointer text-center"
            >
              <div className="text-teal-300 mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <p className="text-gray-300 font-medium">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
