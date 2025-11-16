"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function AllProducts() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${api}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#072024] via-[#0a2b2e] to-[#071b1d] py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-lg">
            Our Product Range
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm opacity-80">
            Explore trusted pharmaceutical formulations manufactured with precision.
          </p>

          {/* Decorative glowing line */}
          <div className="w-40 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto mt-4 rounded-full shadow-lg shadow-teal-500/40"></div>
        </div>

        {/* Loading Effect */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-pulse text-teal-400 text-lg tracking-wide">
              Loading products...
            </div>
          </div>
        )}

        {/* Product List */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p) => (
              <Link
                key={p._id}
                href={`/products/${p.slug}`}
                className="group transform transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="
                  rounded-2xl 
                  bg-[#0c2427]/60 
                  backdrop-blur-lg 
                  border border-teal-500/20 
                  shadow-xl 
                  group-hover:border-teal-400/50
                  group-hover:shadow-teal-500/30
                  hover:-translate-y-1
                  transition-all 
                  p-3
                ">
                  <ProductCard product={p} />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <p className="text-center text-gray-400 text-lg py-20">
            No products available.
          </p>
        )}

        {/* Bottom Accent */}
        <div className="mt-20 h-[2px] w-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>
      </div>
    </div>
  );
}
