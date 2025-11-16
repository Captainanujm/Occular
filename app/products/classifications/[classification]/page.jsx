"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductCategoryPage() {
  const { classification } = useParams();
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    if (!classification) return;

    setLoading(true);
    fetch(`${api}/api/products?classification=${decodeURIComponent(classification)}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [classification]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#031F26] via-[#062E35] to-[#021B21] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text 
            bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-lg">
            {decodeURIComponent(classification)} Products
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base">
            Explore products under the {decodeURIComponent(classification)} classification.
          </p>
        </div>

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="h-64 rounded-2xl bg-teal-900/10 animate-pulse 
                  border border-teal-700/20 shadow-md"
              ></div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p) => (
              <Link
                key={p._id}
                href={`/products/${createSlug(p.name)}`}
                className="transform transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 
                  hover:shadow-xl hover:shadow-teal-500/20"
              >
                <div
                  className="p-3 rounded-2xl 
                    bg-[#0A2F35]/40 backdrop-blur-md 
                    border border-teal-600/30 hover:border-teal-400/60
                    transition-all duration-300 shadow-md hover:bg-[#0A2F35]/60"
                >
                  <ProductCard product={p} />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg mb-4">
              No products found in this category.
            </p>

            <Link 
              href="/products/classification"
              className="px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 
                transition text-white font-medium shadow-md"
            >
              Go Back
            </Link>
          </div>
        )}

        {/* Divider */}
        <div className="mt-20 h-1 w-full bg-gradient-to-r 
          from-transparent via-teal-500/40 to-transparent opacity-30"></div>
      </div>
    </div>
  );
}
