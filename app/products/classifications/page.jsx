"use client";
import { useEffect, useState } from "react";
import GridCard from "@/components/GridCard";

export default function CategoriesPage() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all classification-wise categories from backend
    fetch(`${api}/api/products/classifications`)
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-700 mb-8">
        Category Wise Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.length > 0 ? (
          categories.map((classification) => (
            <GridCard
              key={classification}
              title={classification}
              link={`/products/classifications/${encodeURIComponent(classification)}`}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No categories found.</p>
        )}
      </div>
    </div>
  );
}
