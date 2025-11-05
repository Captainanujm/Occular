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
    <div className="min-h-screen bg-[#0f1d1f] py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-teal-300 tracking-wide">
            {decodeURIComponent(classification)} Products
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-sm">
            Explore pharmaceutical formulations in the {decodeURIComponent(classification)} category.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-400">Loading products...</p>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link
                key={p._id}
                href={`/products/${createSlug(p.name)}`}
                className="transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-teal-800/40 rounded-xl"
              >
                <div className="bg-[#122728] border border-teal-600/30 rounded-xl p-3 hover:border-teal-400/60 transition-colors">
                  <ProductCard product={p} />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <p className="text-center text-gray-400">
            No products found in this category.
          </p>
        )}

        {/* Accent Divider */}
        <div className="mt-16 h-1 w-full bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-40"></div>
      </div>
    </div>
  );
}
