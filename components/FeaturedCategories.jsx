"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function FeaturedCategories({ categories }) {
  return (
    <div className="py-20 bg-gradient-to-br from-[#0b1213] to-[#0f1d1f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-teal-300 mb-12"
        >
          Explore Popular Categories
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {categories?.map((c, i) => (
            <motion.div
              key={c}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                min-w-[200px] rounded-2xl p-6 text-center
                bg-[#132b2d]/60 backdrop-blur-xl
                border border-teal-500/20 cursor-pointer
                shadow-xl hover:border-teal-400/50 hover:shadow-teal-500/40
              "
            >
              <Link href={`/products/sections/${encodeURIComponent(c)}`}>
                <h3 className="text-xl font-semibold text-teal-300">
                  {c}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
