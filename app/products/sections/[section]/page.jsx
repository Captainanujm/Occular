"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductSectionPage() {
  const { section } = useParams(); // dynamic route param
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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-700 mb-8">
        {decodeURIComponent(section)} Section
      </h1>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No products found for this section.
        </p>
      )}
    </div>
  );
}
