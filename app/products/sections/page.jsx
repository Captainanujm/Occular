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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-700 mb-8">
        Section Wise Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {sections.length > 0 ? (
          sections.map((section) => (
            <GridCard
              key={section}
              title={section}
              link={`/products/sections/${encodeURIComponent(section)}`}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No sections found.</p>
        )}
      </div>
    </div>
  );
}
