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
    <div className="max-w-7xl mx-auto px-6 py-16 min-h-screen 
      bg-gradient-to-b from-[#031F26] via-[#062E35] to-[#021B21] text-white">

      {/* Page Header */}
      <h1 className="text-5xl font-bold text-center mb-14 
        text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-lg">
        {decodeURIComponent(section)} Products
      </h1>

      {/* Loading State – Premium */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-64 rounded-2xl bg-teal-900/10 animate-pulse 
              border border-teal-700/20 shadow-md"
            ></div>
          ))}
        </div>
      ) : products.length > 0 ? (
        
        /* Products Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <Link
              key={p._id}
              href={`/products/${p.slug}`}
              className="
                transform transition-all duration-300 
                hover:scale-[1.04] hover:-translate-y-2 hover:shadow-xl
                hover:shadow-teal-500/20
              "
            >
              <div
                className="
                  p-3 rounded-2xl 
                  bg-[#0A2F35]/40 backdrop-blur-md 
                  border border-teal-600/30 
                  hover:border-teal-400/60 
                  hover:bg-[#0A2F35]/60
                  transition-all duration-300 shadow-md
                "
              >
                <ProductCard product={p} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        
        /* No Products Found */
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg mb-4">
            No products found in this section.
          </p>

          <Link
            href="/products/sections"
            className="px-5 py-2 rounded-lg bg-teal-600 
            hover:bg-teal-700 transition text-white font-medium shadow-md"
          >
            Back to Sections
          </Link>
        </div>
      )}
    </div>
  );
}
