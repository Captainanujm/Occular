"use client";
import { useEffect, useState } from "react";
import GridCard from "@/components/GridCard";
import { motion } from "framer-motion";

export default function SectionsPage() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch(`${api}/api/products/sections`)
      .then((res) => res.json())
      .then(setSections)
      .catch((err) => console.error("Error fetching sections:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1213] via-[#0f1d1f] to-[#0b1213] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold text-teal-300 tracking-wide drop-shadow-md">
            Section Wise Products
          </h1>

          <div className="w-36 h-1 bg-gradient-to-r from-teal-400 to-teal-700 rounded-full mx-auto mt-4 shadow-lg"></div>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Explore our complete pharmaceutical categories, crafted to help you browse effortlessly.
            Find the medicines you need organized by sections.
          </p>
        </motion.div>

        {/* Sections Grid */}
        {sections.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                className="
                  group relative rounded-3xl p-[2px]
                  bg-gradient-to-br from-teal-600/25 via-teal-900/10 to-transparent
                  hover:from-teal-400/50 hover:via-teal-700/25 hover:to-transparent
                  transition-all duration-500 shadow-xl hover:shadow-teal-400/40
                  cursor-pointer
                "
              >
                <div
                  className="
                    bg-[#132b2d]/70 backdrop-blur-xl rounded-3xl p-7 h-full
                    border border-teal-600/20 group-hover:border-teal-400/40
                    transition-all duration-500
                  "
                >
                  <div className="flex justify-center mb-6">
                    <div
                      className="
                        w-18 h-18 rounded-full bg-teal-500/25
                        flex items-center justify-center
                        text-teal-300 text-4xl font-extrabold tracking-wide
                        group-hover:bg-teal-500/35 transition-all
                      "
                    >
                      {section.charAt(0).toUpperCase()}
                    </div>
                  </div>

                  <GridCard
                    title={section}
                    link={`/products/sections/${encodeURIComponent(section)}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex justify-center mt-20">
            <div className="animate-pulse text-gray-400 text-xl">
              Loading Sections...
            </div>
          </div>
        )}

        <div className="mt-20 h-[2px] w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-40"></div>
      </div>
    </div>
  );
}
