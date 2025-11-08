"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductSectionPage() {
  const { section } = useParams();
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!section) return;

    setLoading(true);
    fetch(`${api}/api/products?section=${decodeURIComponent(section)}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [section]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-b from-[#022B36] via-[#013440] to-[#002B33] min-h-screen text-white">
      <h1 className="text-4xl font-semibold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-400">
        {decodeURIComponent(section)} Section
      </h1>

      {loading ? (
        <div className="flex justify-center py-20 text-cyan-600 animate-pulse text-lg font-medium">
          Loading products...
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link
              key={p._id}
              href={`/products/${p.slug}`}
              className="transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
            >
              <div className="bg-[#0A2F35]/60 backdrop-blur-md border border-teal-600/40 hover:border-teal-400/60 rounded-xl shadow-lg hover:shadow-teal-500/30 transition-all p-2">
                <ProductCard product={p} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg py-20">
          No products found for this section.
        </p>
      )}
    </div>
  );
}
