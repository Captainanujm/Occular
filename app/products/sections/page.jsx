"use client";
import { useEffect, useState } from "react";
import GridCard from "@/components/GridCard";

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
    <div className="min-h-screen bg-[#0f1d1f] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-teal-300 tracking-wide drop-shadow-md">
            Section Wise Products
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
            Explore our complete pharmaceutical categories organized by sections 
            for quick and easy browsing.
          </p>
        </div>

        {/* Sections Grid */}
        {sections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div
                key={section}
                className="
                  group relative rounded-2xl p-[2px]
                  bg-gradient-to-br from-teal-500/20 via-teal-700/10 to-transparent
                  hover:from-teal-400/40 hover:via-teal-700/20 hover:to-transparent
                  transition-all duration-300 shadow-xl hover:shadow-teal-500/30
                  cursor-pointer
                "
              >
                <div
                  className="
                    bg-[#122728]/60 backdrop-blur-md rounded-2xl p-5 h-full
                    border border-teal-600/20 group-hover:border-teal-400/40
                    transition-all duration-300
                  "
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="
                        w-16 h-16 rounded-full bg-teal-500/20
                        flex items-center justify-center
                        text-teal-300 text-2xl font-semibold
                        group-hover:bg-teal-500/30 transition-all
                      "
                    >
                      {section.charAt(0).toUpperCase()}
                    </div>
                  </div>

                  {/* GridCard */}
                  <GridCard
                    title={section}
                    link={`/products/sections/${encodeURIComponent(section)}`}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-12 text-lg">
            No sections found.
          </p>
        )}

        {/* Bottom Accent Divider */}
        <div className="mt-20 h-1 w-full bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-30"></div>
      </div>
    </div>
  );
}
