"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function AllProducts() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState([]);
  const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    fetch(`${api}/api/products`)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1d1f] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-teal-300 tracking-wide">
            Our Product Range
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-sm">
            Trusted pharmaceutical formulations crafted with precision and care.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link
              key={p._id}
             href={`/products/${p.slug}`}
              className="transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-teal-800/40 rounded-xl"
            >
              <div className="bg-[#122728] border border-teal-600/30 rounded-xl p-3 hover:border-teal-400/60 transition-colors">
                <ProductCard product={p} />
              </div>
            </Link>
          ))}
        </div>

        {/* Subtle Bottom Gradient Accent */}
        <div className="mt-16 h-1 w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-40"></div>
      </div>
    </div>
  );
}
