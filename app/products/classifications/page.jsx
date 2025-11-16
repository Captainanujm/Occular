"use client";
import { useEffect, useState } from "react";
import GridCard from "@/components/GridCard";
import { motion } from "framer-motion";

export default function CategoriesPage() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${api}/api/products/classifications`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#081618] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
            Category Wise Products
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-base">
            Browse pharmaceuticals grouped by their therapeutic classification.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-teal-400 py-10 animate-pulse">
            Loading categories...
          </div>
        )}

        {/* Categories Grid */}
        {!loading && categories.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((classification, index) => (
              <motion.div
                key={classification}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="group"
              >
                <div className="
                  bg-[#0d2527]/60 
                  backdrop-blur-lg 
                  border border-teal-700/30 
                  group-hover:border-teal-400/70 
                  rounded-xl p-4 
                  transition-all duration-300 
                  hover:scale-[1.05] 
                  shadow-lg 
                  hover:shadow-teal-500/30
                ">
                  <GridCard
                    title={classification}
                    link={`/products/classifications/${encodeURIComponent(classification)}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && categories.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No categories found.
          </p>
        )}

        {/* Decorative Divider */}
        <div className="mt-16 h-1 w-full bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-40"></div>
      </div>
    </div>
  );
}
