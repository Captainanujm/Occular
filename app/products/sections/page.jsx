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
    <div className="min-h-screen bg-[#0f1d1f] py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-teal-300 tracking-wide">
            Section Wise Products
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-sm">
            Explore our product lineup categorized by pharmaceutical sections.
          </p>
        </div>

        {/* Sections Grid */}
        {sections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <div
                key={section}
                className="transform transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-teal-800/40 rounded-xl"
              >
                <div className="bg-[#122728] border border-teal-600/30 rounded-xl p-4 hover:border-teal-400/60 transition-colors">
                  <GridCard
                    title={section}
                    link={`/products/sections/${encodeURIComponent(section)}`}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            No sections found.
          </p>
        )}

        {/* Accent Divider */}
        <div className="mt-16 h-1 w-full bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-40"></div>
      </div>
    </div>
  );
}
